using EnglishAssistantBackend.DTOs;
using EnglishAssistantBackend.Interfaces.Services;
using EnglishAssistantBackend.Interfaces.Repositories;

namespace EnglishAssistantBackend.Services
{
    public class AccountService : IAccountService
    {
        private readonly IUserRepository _userRepository;
        private readonly IRoleRepository _roleRepository;

        public AccountService(IUserRepository userRepository, IRoleRepository roleRepository)
        {
            _userRepository = userRepository;
            _roleRepository = roleRepository;
        }

        public async Task<AuthorizationResponseDto> AuthorizeUser(UserDto userDto)
        {
            //Извлекаем пользователя из списка по username (в случае его отсутствия получим null)
            var existingUser = await _userRepository.GetUserByUsername(userDto.Username);

            //Если пользователя с данным username не существует
            if (existingUser == null)
            {
                AuthorizationResponseDto response = new AuthorizationResponseDto()
                {
                    IsError = true,
                    FeedbackMessage = "✗A user with this username does not exist"
                };
                return response;
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
                    return response;
                }
                else
                {
                    try
                    {
                        // Получаем роль пользователя по её идентификатору в базе данных
                        var role = await _roleRepository.GetRoleById(existingUser.RoleId);

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
                        return response;
                    }
                    catch (Exception ex)
                    {
                        AuthorizationResponseDto response = new AuthorizationResponseDto()
                        {
                            IsError = true,
                            FeedbackMessage = $"✗Failed to complete the authorization. Error: {ex.Message}"
                        };
                        return response;
                    }
                }
            }
        }
    }
}
