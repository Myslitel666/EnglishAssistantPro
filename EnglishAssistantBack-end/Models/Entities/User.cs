﻿using System;
using System.Collections.Generic;

namespace EnglishAssistantBackend.Models.Entities;

public partial class UserDto
{
    public int UserId { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }
}
