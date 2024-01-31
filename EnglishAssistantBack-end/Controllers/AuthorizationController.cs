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
                return Ok(new
                {
                    IsError = true,
                    FeedbackMessage = "✗A user with this username does not exist"
                });
            }
            else
            {
                //Если пароль не верный
                if (existingUser.Password != userDto.Password)
                {
                    return Ok(new
                    {
                        IsError = true,
                        FeedbackMessage = "✗The password is incorrect"
                    });
                }
                else
                {
                    try
                    {
                        return Ok(new
                        {
                            IsError = false,
                            FeedbackMessage = "✓User successfully authorized"
                        });
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(new
                        {
                            IsError = true,
                            FeedbackMessage = $"✗Failed to complete the authorization. Error: {ex.Message}"
                        });
                    }
                }
            }
        }
    }
}
