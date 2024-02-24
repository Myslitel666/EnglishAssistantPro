using EnglishAssistantBackend.DTOs;
using EnglishAssistantBackend.Interfaces.Services;
using EnglishAssistantBackend.Interfaces.Repositories;
using EnglishAssistantBackend.Models.Entities;
using EnglishAssistantBackend.DTOs.Requests;
using EnglishAssistantBackend.DTOs.Responses;
using Microsoft.AspNetCore.Http.HttpResults;

namespace EnglishAssistantBackend.Services
{
    public class JargonDictionaryService : IJargonDictionaryService
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserJargonsRepository _userJargonsRepository;
        private readonly IJargonRepository _jargonRepository;

        public JargonDictionaryService(IUserRepository userRepository, IUserJargonsRepository userJargonsRepository, IJargonRepository jargonRepository)
        {
            _userRepository = userRepository;
            _userJargonsRepository = userJargonsRepository;
            _jargonRepository = jargonRepository;
        }

        public async Task<JargonResponseDto> AddJargon(JargonDto jargonDto)
        {
            var userJargonList = await _userJargonsRepository.GetJargonsByUserId(jargonDto.UserId);

            var wordExists = userJargonList.Any(j => j == jargonDto.JargonInstance);

            if (wordExists)
            {
                var response = new JargonResponseDto
                {
                    IsError = true,
                    FeedbackMessage = "✗The word already exists in the dictionary"
                };
                return response;
            }

            try
            {
                var jargon = new Jargon 
                {
                    JargonInstance = jargonDto.JargonInstance,
                    Translate = jargonDto.Translate,
                    ExampleOfUse = jargonDto.ExampleOfUse
                };
                int addedJargonId = await _jargonRepository.AddJargon(jargon);
                var userJargon = new UserJargon()
                {
                    UserId = jargonDto.UserId,
                    JargonId = addedJargonId
                };
                await _userJargonsRepository.AddUserJargon(userJargon);

                var response = new JargonResponseDto
                {
                    IsError = false,
                    FeedbackMessage = "✓The word has been successfully added"
                };
                return response;
            }
            catch (Exception ex)
            {
                var response = new JargonResponseDto
                {
                    IsError = false,
                    FeedbackMessage = $"✗Failed to add the word. Error: {ex.Message}"
                };
                return response;
            }
        }
    }
}
