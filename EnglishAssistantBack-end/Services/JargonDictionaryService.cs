using EnglishAssistantBackend.DTOs;
using EnglishAssistantBackend.Interfaces.Services;
using EnglishAssistantBackend.Interfaces.Repositories;
using EnglishAssistantBackend.Models.Entities;
using EnglishAssistantBackend.DTOs.Requests;
using EnglishAssistantBackend.DTOs.Responses;

namespace EnglishAssistantBackend.Services
{
    public class JargonDictionaryService : IJargonDictionaryService
    {
        private readonly IUserRepository _userRepository;

        public JargonDictionaryService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<JargonResponseDto> AddJargon(JargonDto jargonDto)
        {
            var res = new JargonResponseDto
            {
                IsError = false,
                FeedbackMessage = "✓The word has been successfully added"
            };
            return res;
        }
    }
}
