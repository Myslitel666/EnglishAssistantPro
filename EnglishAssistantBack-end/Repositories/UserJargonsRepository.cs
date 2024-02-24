using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Models.Entities;

namespace EnglishAssistantBackend.Repositories
{
    public class UserJargonsRepository
    {
        private readonly EnglishAssistantContext _dbContext;

        public UserJargonsRepository(EnglishAssistantContext dbContext)
        {
            _dbContext = dbContext;
        }

        //public async Task<Role> GetJargonsByUserId(int userId)
        //{
        //    return new Task();
        //}
    }
}
