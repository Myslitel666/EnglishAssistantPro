using Microsoft.AspNetCore.Mvc;
using EnglishAssistentBackend.Context;
using Microsoft.EntityFrameworkCore;
using EnglishAssistentBackend.Models.Entities;
using EnglishAssistentBackend.DTOs;

namespace Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : Controller
    {
        private EnglishAssistentContext _dbContext; // Замените YourDbContext на фактическое имя вашего DbContext

        public HomeController()
        {
            _dbContext = new EnglishAssistentContext();
        }

        [HttpGet("getJargonDictionary")]
        public async Task<IActionResult> GetAll()
        {
            var jargonEntries = await _dbContext.JargonDictionaries
            .OrderBy(entry => entry.Jargon) //Сортировка по колонке jargon
            .ToListAsync();
            return Ok(jargonEntries);
        }

        [HttpPost("setJargonDictionary")]
        public async Task<IActionResult> SendJargon([FromBody] JargonDictionaryDto jargonDictionaryDto)
        {
            JargonDictionary jargonDictionary = new JargonDictionary { 
                Jargon = jargonDictionaryDto.Jargon, 
                Translate = jargonDictionaryDto.Translate,
                ExampleOfUse = jargonDictionaryDto.ExampleOfUse,
            };
            _dbContext.JargonDictionaries.Add(jargonDictionary);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
