using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Interfaces.Repositories;
using EnglishAssistantBackend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace EnglishAssistantBackend.Repositories
{
    public class JargonRepository : IJargonRepository
    {
        private readonly EnglishAssistantContext _dbContext;

        public JargonRepository(EnglishAssistantContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<int> AddJargon(Jargon jargon)
        {
            _dbContext.Jargons.Add(jargon);

            await _dbContext.SaveChangesAsync();

            // Получаем идентификатор добавленного объекта
            var jargonId = jargon.JargonId;

            return jargonId;
        }
    }
}
