using EnglishAssistantBackend.Models.Entities;

namespace EnglishAssistantBackend.Interfaces.Repositories
{
    public interface IJargonRepository
    {
        Task<int> AddJargon(Jargon jargon);

        Task<Jargon> GetJargonById(int jargonId);

        Task DeleteJargon(int jargonId);
    }
}
