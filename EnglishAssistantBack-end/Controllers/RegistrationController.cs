using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Models.Entities;
using EnglishAssistentBackend.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        
    }
}
