using EnglishAssistantBackend.Models.Entities;

namespace EnglishAssistantBackend.Interfaces.Repositories
{
    public interface IJargonRepository
    {
        Task<int> AddJargon(Jargon jargon);
    }
}
