using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Models.Entities;
using EnglishAssistantBackend.DTOs.Requests;
using EnglishAssistantBackend.Interfaces.Services;
using EnglishAssistantBackend.Interfaces.Repositories;
using EnglishAssistantBackend.Repositories;

namespace EnglishAssistantBackend.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : Controller
    {
        private EnglishAssistantContext _dbContext;
        private readonly IJargonDictionaryService _jargonDictionaryService;

        public HomeController(IJargonDictionaryService jargonDictionaryService)
        {
            _dbContext = new EnglishAssistantContext();
            _jargonDictionaryService = jargonDictionaryService;
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
        public async Task<IActionResult> SendJargon([FromBody] JargonDto jargonDto)
        {
            var response = await _jargonDictionaryService.AddJargon(jargonDto);

            return Ok(response);
        }

        [HttpPost("modifyJargonDictionary")]
        public async Task<IActionResult> ModifyJargon([FromBody] JargonDto jargonDto)
        {
            var jargonResponseDto = await _jargonDictionaryService.ModifyJargon(jargonDto);

            return Ok(jargonResponseDto);
        }

        [HttpPost("deleteJargonDictionary")]
        public async Task<IActionResult> DeleteJargon([FromBody] JargonDto jargonDto)
        {
            var jargonResponseDto = await _jargonDictionaryService.DeleteJargon(jargonDto);

            return Ok(jargonResponseDto);
        }
    }
}
