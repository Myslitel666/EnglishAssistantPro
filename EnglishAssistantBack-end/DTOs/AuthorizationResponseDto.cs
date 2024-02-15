namespace EnglishAssistantBackend.DTOs
{
    public class AuthorizationResponseDto
    {
        public bool IsError { get; set; }
        public string FeedbackMessage { get; set; }
        public UserDto User { get; set; }
    }
}
