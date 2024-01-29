using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishAssistentBackend.DTOs;
using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Models.Entities;

namespace Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : Controller
    {
        private EnglishAssistantContext _dbContext;

        public HomeController()
        {
            _dbContext = new EnglishAssistantContext();
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
            //Извлекаем слово из словаря (в случае его отсутствия получим null)
            var existingWord = await _dbContext.JargonDictionaries
            .FirstOrDefaultAsync(j => j.Jargon == jargonDictionaryDto.Jargon);

            //Если слово уже присутствует в словаре
            if (existingWord != null)
            {
                return Ok(new
                {
                    IsError = true,
                    FeedbackMessage = "✗The word already exists in the dictionary"
                });
            }

            try
            {
                var jargonDictionary = new JargonDictionary
                {
                    Jargon = jargonDictionaryDto.Jargon,
                    Translate = jargonDictionaryDto.Translate,
                    ExampleOfUse = jargonDictionaryDto.ExampleOfUse,
                };
                _dbContext.JargonDictionaries.AddAsync(jargonDictionary);
                await _dbContext.SaveChangesAsync();
                return Ok(
                    new
                    {
                        IsError = false,
                        FeedbackMessage = "✓The word has been successfully added"
                    });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    IsError = true,
                    FeedbackMessage = $"✗Failed to add the word. Error: {ex.Message}"
                });
            }
        }

        [HttpPost("modifyJargonDictionary")]
        public async Task<IActionResult> ModifyJargon([FromBody] JargonDictionaryDto jargonDictionaryDto)
        {
            //Извлекаем слово из словаря по значению
            //(в случае его отсутствия получим null)
            var existingWord = await _dbContext.JargonDictionaries
            .FirstOrDefaultAsync(j => j.Jargon == jargonDictionaryDto.Jargon);

            //Если слово уже присутствует в словаре
            if (existingWord != null)
            {
                return Ok(new
                {
                    IsError = true,
                    FeedbackMessage = $"✗The word '{jargonDictionaryDto.Jargon}' already exists in the dictionary"
                });
            }

            //Извлекаем слово из словаря по id
            //(в случае отсутствия слова с данным id в словаре получим null)

            existingWord = await _dbContext.JargonDictionaries
            .FirstOrDefaultAsync(j => j.Id == jargonDictionaryDto.Id);

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
                int OldId = jargonDictionaryDto.Id;
                var jargonDictionary = await _dbContext.JargonDictionaries.FindAsync(OldId);
                //Modify the values of JargonDictionary attributes
                jargonDictionary.Jargon = jargonDictionaryDto.Jargon;
                jargonDictionary.Translate = jargonDictionaryDto.Translate;
                jargonDictionary.ExampleOfUse = jargonDictionaryDto.ExampleOfUse;
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
        public async Task<IActionResult> DeleteJargon([FromBody] JargonDictionaryDto jargonDictionaryDto)
        {
            //Извлекаем слово из словаря по id
            //(в случае отсутствия слова с данным id в словаре получим null)
            var existingWord = await _dbContext.JargonDictionaries
            .FirstOrDefaultAsync(j => j.Id == jargonDictionaryDto.Id);

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
                    Id = jargonDictionaryDto.Id,
                    Jargon = jargonDictionaryDto.Jargon,
                    Translate = jargonDictionaryDto.Translate,
                    ExampleOfUse = jargonDictionaryDto.ExampleOfUse,
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
