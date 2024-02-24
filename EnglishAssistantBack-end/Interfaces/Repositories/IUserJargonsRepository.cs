using EnglishAssistantBackend.Models.Entities;

namespace EnglishAssistantBackend.Interfaces.Repositories
{
    public interface IUserJargonsRepository
    {
        Task<IEnumerable<string>> GetJargonsByUserId(int userId);
    }
}
