using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EnglishAssistantBackend.DTOs;

public partial class UserDto
{
    public int UserId { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }
}
