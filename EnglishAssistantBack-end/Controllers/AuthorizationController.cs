using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishAssistantBackend.DTOs;

namespace EnglishAssistantBackend.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthorizationController : Controller
    {
        private EnglishAssistantContext _dbContext;

        public AuthorizationController()
        {
            _dbContext = new EnglishAssistantContext();
        }

        [HttpPost("findUser")]
        public async Task<IActionResult> FindUser([FromBody] UserDto userDto)
        {
            //Извлекаем пользователя из списка по username (в случае его отсутствия получим null)
            var existingUser = await _dbContext.Users
            .FirstOrDefaultAsync(user => user.Username == userDto.Username);

            //Если пользователя с данным username не существует
            if (existingUser == null)
            {
                AuthorizationResponseDto response = new AuthorizationResponseDto()
                {
                    IsError = true,
                    FeedbackMessage = "✗A user with this username does not exist"
                };
                return Ok(response);
            }
            else
            {
                //Если пароль не верный
                if (existingUser.Password != userDto.Password)
                {
                    AuthorizationResponseDto response = new AuthorizationResponseDto()
                    {
                        IsError = true,
                        FeedbackMessage = "✗The password is incorrect"
                    };
                    return Ok(response);
                }
                else
                {
                    try
                    {
                        // Получаем роль пользователя по её идентификатору в базе данных
                        var role = await _dbContext.Roles.FirstOrDefaultAsync(r => r.RoleId == existingUser.RoleId);

                        //Создаю экземпляр UserDto
                        UserDto userResponseDto = new UserDto()
                        {
                            UserId = existingUser.UserId,
                            Role = role.RoleName,
                            Username = existingUser.Username,
                        };

                        AuthorizationResponseDto response = new AuthorizationResponseDto()
                        {
                            IsError = false,
                            FeedbackMessage = "✓User successfully authorized",
                            User = userResponseDto
                        };
                        return Ok(response);
                    }
                    catch (Exception ex)
                    {
                        AuthorizationResponseDto response = new AuthorizationResponseDto()
                        {
                            IsError = true,
                            FeedbackMessage = $"✗Failed to complete the authorization. Error: {ex.Message}"
                        };
                        return BadRequest(response);
                    }
                }
            }
        }
    }
}
