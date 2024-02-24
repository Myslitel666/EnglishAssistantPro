using Microsoft.EntityFrameworkCore;
using EnglishAssistantBackend.Context;
using EnglishAssistantBackend.Interfaces;
using EnglishAssistantBackend.Repositories;

var builder = WebApplication.CreateBuilder(args);

//Add database context
builder.Services.AddDbContext<EnglishAssistantContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IRoleRepository, RoleRepository>();

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