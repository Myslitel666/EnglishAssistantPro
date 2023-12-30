using Microsoft.AspNetCore.Mvc;
using Context;
using Microsoft.EntityFrameworkCore;
using Models.Entities;

namespace Controllers
{
    public class HomeController : Controller
    {
        private readonly EnglishAssistentContext _dbContext; // Замените YourDbContext на фактическое имя вашего DbContext

        public HomeController(EnglishAssistentContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IActionResult> GetAll()
        {
            // Асинхронно получаем все элементы из таблицы JargonDictionary
            List<JargonDictionary> jargonEntries = await _dbContext.JargonDictionaries.ToListAsync();

            return View(jargonEntries);
        }
    }
}
