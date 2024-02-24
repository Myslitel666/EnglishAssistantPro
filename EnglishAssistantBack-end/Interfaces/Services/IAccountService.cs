using EnglishAssistantBackend.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace EnglishAssistantBackend.Interfaces.Services
{
    public interface IAccountService
    {
        Task<AuthorizationResponseDto> AuthorizeUser(UserDto userDto);

        Task<AuthorizationResponseDto> RegisterUser(UserDto userDto);

    }
}
