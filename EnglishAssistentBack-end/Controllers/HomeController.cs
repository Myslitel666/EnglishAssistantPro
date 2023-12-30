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
        private readonly EnglishAssistentContext _dbContext; // Замените YourDbContext на фактическое имя вашего DbContext

        public HomeController(EnglishAssistentContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("jargonDictionary")]
        public async Task<ActionResult<IEnumerable<JargonDictionary>>> GetAll()
        {
            var jargonEntries = await _dbContext.JargonDictionaries.ToListAsync();
            return jargonEntries;
        }
    }
}
