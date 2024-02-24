using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishAssistentBackend.DTOs;
using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Models.Entities;

namespace EnglishAssistantBackend.Controllers
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
        public async Task<IActionResult> SendJargon([FromBody] JargonDto jargonDto)
        {
            //Извлекаем слово из общего словаря (в случае его отсутствия получим null)
            var existingJargon = await _dbContext.Jargons
            .FirstOrDefaultAsync(j => j.JargonInstance == jargonDto.JargonInstance);

            //Если слова нет в общем словаре

            UserJargon existingUserJargon = null;

            //Извлекаем слово пользователя, если оно есть
            if (existingJargon != null)
            {
                existingUserJargon = await _dbContext.UserJargons
                .FirstOrDefaultAsync(j => j.JargonId == existingJargon.JargonId && j.UserId == jargonDto.UserId);
            }

            //Если слово уже присутствует в пользовательском словаре
            if (existingUserJargon != null)
            {
                return Ok(new
                {
                    IsError = true,
                    FeedbackMessage = "✗The word already exists in the dictionary"
                });
            }

            try
            {
                //Добавляем слово в общий словарь
                var jargon = new Jargon
                {
                    JargonInstance = jargonDto.JargonInstance,
                    Translate = jargonDto.Translate,
                    ExampleOfUse = jargonDto.ExampleOfUse,
                };
                _dbContext.Jargons.AddAsync(jargon);
                await _dbContext.SaveChangesAsync();

                //Узнаём id добавленного слова в общий словарь
                existingJargon = await _dbContext.Jargons
                .FirstOrDefaultAsync(j => j.JargonInstance == jargonDto.JargonInstance);

                //Сохраняем id слова в словаре пользователя
                var userJargon = new UserJargon
                {
                    JargonId = existingJargon.JargonId,
                    UserId = jargonDto.UserId
                };
                _dbContext.UserJargons.AddAsync(userJargon);
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
