namespace EnglishAssistentBackend.DTOs;

public class JargonDto
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string? JargonInstance { get; set; }

    public string? Translate { get; set; }

    public string? ExampleOfUse { get; set; }
}
