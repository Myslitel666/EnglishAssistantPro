using EnglishAssistantBackend.DTOs;
using EnglishAssistantBackend.Interfaces.Services;
using EnglishAssistantBackend.Interfaces.Repositories;
using EnglishAssistantBackend.Models.Entities;
using EnglishAssistantBackend.DTOs.Requests;
using EnglishAssistantBackend.DTOs.Responses;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using EnglishAssistantBackend.Repositories;

namespace EnglishAssistantBackend.Services
{
    public class JargonDictionaryService : IJargonDictionaryService
    {
        private readonly IUserJargonsRepository _userJargonsRepository;
        private readonly IJargonRepository _jargonRepository;

        public JargonDictionaryService(
            IUserJargonsRepository userJargonsRepository, 
            IJargonRepository jargonRepository
        )
        {
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
                    IsError = true,
                    FeedbackMessage = $"✗Failed to add the word. Error: {ex.Message}"
                };
                return response;
            }
        }

        public async Task<JargonResponseDto> DeleteJargon(JargonDto jargonDto)
        {
            //Извлекаем слово из словаря по id
            //(в случае отсутствия слова с данным id в словаре получим null)
            var existingJargon = await _jargonRepository.GetJargonById(jargonDto.JargonId);

            //Если слова с таким id нет в словаре
            if (existingJargon == null)
            {
                return (new JargonResponseDto
                {
                    IsError = true,
                    FeedbackMessage = "✗The word with such an ID do not exist"
                });
            }
            var jargon = new Jargon
            {
                JargonId = jargonDto.JargonId,
                JargonInstance = jargonDto.JargonInstance,
                Translate = jargonDto.Translate,
                ExampleOfUse = jargonDto.ExampleOfUse,
            };

            var userJargonIdList = await _userJargonsRepository.GetJargonIdsByUserId(jargonDto.UserId);
            var isUserHasJargon = userJargonIdList.Any(j => j == jargonDto.JargonId);

            if (isUserHasJargon)
            {
                try
                {
                    await _userJargonsRepository.DeleteUserJargon(jargonDto.UserId, jargonDto.JargonId);
                    await _jargonRepository.DeleteJargon(jargonDto.JargonId);
                    return (new JargonResponseDto
                    {
                        IsError = false,
                        FeedbackMessage = "✓The word has been successfully deleted"
                    });
                }
                catch (Exception ex)
                {
                    return (new JargonResponseDto
                    {
                        IsError = true,
                        FeedbackMessage = $"✗Failed to delete the word. Error: {ex.Message}"
                    });
                }
            }
            else
            {
                var response = new JargonResponseDto
                {
                    IsError = true,
                    FeedbackMessage = "✗The word with such an ID do not exist"
                };
                return response;
            }
        }
    }
}
