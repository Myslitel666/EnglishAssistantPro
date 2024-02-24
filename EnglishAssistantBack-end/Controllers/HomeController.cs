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
        private readonly IUserJargonsRepository _userJargonsRepository;

        public HomeController(IJargonDictionaryService jargonDictionaryService, IUserJargonsRepository userJargonsRepository)
        {
            _dbContext = new EnglishAssistantContext();
            _jargonDictionaryService = jargonDictionaryService;

            _userJargonsRepository = userJargonsRepository;
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
            //Извлекаем слово из словаря по id
            //(в случае отсутствия слова с данным id в словаре получим null)

            var existingWord = await _dbContext.JargonDictionaries
            .FirstOrDefaultAsync(j => j.Id == jargonDto.Id);

            //Если слова с таким id нет в словаре
            if (existingWord == null)
            {
                return Ok(new
                {
                    IsError = true,
                    FeedbackMessage = "✗The word with such an ID do not exist"
                });
            }

            try
            {
                //Get instance by Id
                int OldId = jargonDto.Id;
                var jargonDictionary = await _dbContext.JargonDictionaries.FindAsync(OldId);
                //Modify the values of JargonDictionary attributes
                jargonDictionary.Jargon = jargonDto.JargonInstance;
                jargonDictionary.Translate = jargonDto.Translate;
                jargonDictionary.ExampleOfUse = jargonDto.ExampleOfUse;
                _dbContext.Entry(existingWord).State = EntityState.Detached; //Отменяем отслеживание элемента по id
                _dbContext.JargonDictionaries.Update(jargonDictionary);
                await _dbContext.SaveChangesAsync();
                return Ok(
                new
                {
                    IsError = false,
                    FeedbackMessage = "✓The word has been successfully modified"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    IsError = true,
                    FeedbackMessage = $"✗Failed to modify the word. Error: {ex.Message}"
                });
            }
        }

        [HttpPost("deleteJargonDictionary")]
        public async Task<IActionResult> DeleteJargon([FromBody] JargonDto jargonDto)
        {
            //Извлекаем слово из словаря по id
            //(в случае отсутствия слова с данным id в словаре получим null)
            var existingWord = await _dbContext.JargonDictionaries
            .FirstOrDefaultAsync(j => j.Id == jargonDto.Id);

            //Если слова с таким id нет в словаре
            if (existingWord == null)
            {
                return Ok(new
                {
                    IsError = true,
                    FeedbackMessage = "✗The word with such an ID do not exist"
                });
            }

            try
            {
                var jargonDictionary = new JargonDictionary
                {
                    Id = jargonDto.Id,
                    Jargon = jargonDto.JargonInstance,
                    Translate = jargonDto.Translate,
                    ExampleOfUse = jargonDto.ExampleOfUse,
                };
                _dbContext.Entry(existingWord).State = EntityState.Detached; //Отменяем отслеживание элемента по id
                _dbContext.JargonDictionaries.Remove(jargonDictionary);
                await _dbContext.SaveChangesAsync();
                _dbContext.Entry(existingWord).State = EntityState.Detached;

                return Ok(
                new
                {
                    IsError = false,
                    FeedbackMessage = "✓The word has been successfully deleted"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    IsError = true,
                    FeedbackMessage = $"✗Failed to delete the word. Error: {ex.Message}"
                });
            }
        }
    }
}
