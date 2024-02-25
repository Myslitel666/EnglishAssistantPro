using EnglishAssistantBackend.DTOs.Requests;
using EnglishAssistantBackend.DTOs.Responses;

namespace EnglishAssistantBackend.Interfaces.Services
{
    public interface IJargonDictionaryService
    {
        Task<JargonResponseDto> AddJargon(JargonDto jargonDto);
        Task<JargonResponseDto> DeleteJargon(JargonDto jargonDto);
    }
}
