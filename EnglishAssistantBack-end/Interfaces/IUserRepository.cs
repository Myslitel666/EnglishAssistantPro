using EnglishAssistantBackend.Models.Entities;

namespace EnglishAssistantBackend.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByUsername(string username);

        Task<User> GetUserById(int userId);

        Task AddUser(User user);
    }
}
