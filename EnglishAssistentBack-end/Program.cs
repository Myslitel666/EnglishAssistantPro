using Controllers;
using Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

//CORS
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins, policy =>
    {
        policy.WithOrigins().AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors(MyAllowSpecificOrigins); //Use CORS
app.MapControllers();
app.Run();

var englishAssistentContext = new EnglishAssistentContext();
var homeController = new HomeController(englishAssistentContext);
var listResult = homeController.GetAll();
listResult = homeController.GetAll();
