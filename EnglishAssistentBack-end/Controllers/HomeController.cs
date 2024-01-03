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
            var jargonDictionary = new JargonDictionary { 
                Jargon = jargonDictionaryDto.Jargon, 
                Translate = jargonDictionaryDto.Translate,
                ExampleOfUse = jargonDictionaryDto.ExampleOfUse,
            };
            _dbContext.JargonDictionaries.AddAsync(jargonDictionary);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("modifyJargonDictionary")]
        public async Task<IActionResult> ModifyJargon([FromBody] JargonDictionaryDto jargonDictionaryDto)
        {
            //Get instance by Id
            int OldId = jargonDictionaryDto.Id;
            var jargonDictionary = await _dbContext.JargonDictionaries.FindAsync(OldId);
            //Modify the values of JargonDictionary attributes
            jargonDictionary.Jargon = jargonDictionaryDto.Jargon;
            jargonDictionary.Translate = jargonDictionaryDto.Translate;
            jargonDictionary.ExampleOfUse = jargonDictionaryDto.ExampleOfUse;
            _dbContext.JargonDictionaries.Update(jargonDictionary);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("deleteJargonDictionary")]
        public async Task<IActionResult> DeleteJargon([FromBody] JargonDictionaryDto jargonDictionaryDto)
        {
            var jargonDictionary = new JargonDictionary
            {
                Id = jargonDictionaryDto.Id,
                Jargon = jargonDictionaryDto.Jargon,
                Translate = jargonDictionaryDto.Translate,
                ExampleOfUse = jargonDictionaryDto.ExampleOfUse,
            };
            _dbContext.JargonDictionaries.Remove(jargonDictionary);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
