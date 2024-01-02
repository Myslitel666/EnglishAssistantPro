using Microsoft.AspNetCore.Mvc;
using Context;
using Microsoft.EntityFrameworkCore;
using Models.Entities;

namespace Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : Controller
    {
        private EnglishAssistentContext _dbContext; // Замените YourDbContext на фактическое имя вашего DbContext

        public HomeController()
        {
            _dbContext = new EnglishAssistentContext();
        }

        [HttpGet("jargonDictionary")]
        public async Task<IActionResult> GetAll()
        {
            var jargonEntries = await _dbContext.JargonDictionaries
            .ToListAsync();
            return Ok(jargonEntries);
        }
    }
}
