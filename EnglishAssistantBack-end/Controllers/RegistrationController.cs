using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EnglishAssistantBackend.DTOs;

namespace EnglishAssistantBackend.Controllers
{
    [Route("api/reg")]
    [ApiController]
    public class RegistrationController : Controller
    {
        private EnglishAssistantContext _dbContext;

        public RegistrationController()
        {
            _dbContext = new EnglishAssistantContext();
        }

        [HttpPost("setUser")]
        public async Task<IActionResult> SetUser([FromBody] UserDto userDto)
        {
            //Извлекаем пользователя из списка по username (в случае его отсутствия получим null)
            var existingUser = await _dbContext.Users
            .FirstOrDefaultAsync(user => user.Username == userDto.Username);

            //Если пользователь с данным username уже присутствует в System
            if (existingUser != null)
            {
                AuthorizationResponseDto response = new AuthorizationResponseDto()
                {
                    IsError = true,
                    FeedbackMessage = "✗A user with this username already exists"
                };
                return Ok(response);
            }

            //Извлекаем пользователя из списка по паролю (в случае его отсутствия получим null)
            existingUser = await _dbContext.Users
            .FirstOrDefaultAsync(user => user.Password == userDto.Password);

            //Если пользователь с данным паролем уже присутствует в System
            if (existingUser != null)
            {
                AuthorizationResponseDto response = new AuthorizationResponseDto()
                {
                    IsError = true,
                    FeedbackMessage = "✗This password is already taken"
                };
                return Ok(response);
            }

            try
            {
                //Получаем идентификатор роли по её имени из базы данных
                var role = await _dbContext.Roles.FirstOrDefaultAsync(r => r.RoleName == userDto.Role);

                if (role == null)
                {
                    return BadRequest(new
                    {
                        IsError = true,
                        FeedbackMessage = "✗Role does not exist"
                    });
                }

                var user = new User
                {
                    RoleId = role.RoleId,
                    Username = userDto.Username,
                    Password = userDto.Password,
                };
                _dbContext.Users.AddAsync(user);
                await _dbContext.SaveChangesAsync();

                //Извлекаем пользователя из списка по username для отправки на client
                var registeredUser = await _dbContext.Users
                .FirstOrDefaultAsync(user => user.Username == userDto.Username);

                //Создаю экземпляр UserDto
                UserDto userResponseDto = new UserDto()
                {
                    UserId = registeredUser.UserId,
                    Role = role.RoleName,
                    Username = registeredUser.Username,
                };

                AuthorizationResponseDto response = new AuthorizationResponseDto()
                {
                    IsError = false,
                    FeedbackMessage = "✓User successfully registered",
                    User = userResponseDto
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                AuthorizationResponseDto response = new AuthorizationResponseDto()
                {
                    IsError = true,
                    FeedbackMessage = $"✗Failed to complete the registration. Error: {ex.Message}"
                };
                return BadRequest(response);
            }
        }
    }
}
