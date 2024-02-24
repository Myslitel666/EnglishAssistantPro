using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Interfaces.Repositories;
using EnglishAssistantBackend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace EnglishAssistantBackend.Repositories
{
    public class UserJargonsRepository : IUserJargonsRepository
    {
        private readonly EnglishAssistantContext _dbContext;

        public UserJargonsRepository(EnglishAssistantContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<string>> GetJargonsByUserId(int userId)
        {
            //Создаю список id слов пользователя
            var JargonIdList = new List<int>();

            //Извлекаю список id слов пользователя из таблицы UserJargons
            JargonIdList = _dbContext.UserJargons
                  .Where(uj => uj.UserId == userId)
                  .Select(uj => uj.JargonId)
                  .ToList();

            var userJargonsList = new List<string>();

            foreach (var jargonId in JargonIdList)
            {
                var word = _dbContext.Jargons
                  .Where(j => j.JargonId == jargonId)
                  .Select(j => j.JargonInstance)
                  .FirstOrDefault();

                if (word != null)
                {
                    userJargonsList.Add(word);
                }
            }

            return userJargonsList;
        }

        public async Task AddUserJargon(UserJargon uderJargons)
        {
            _dbContext.UserJargons.Add(uderJargons);
            await _dbContext.SaveChangesAsync();
        }
    }
}
