using Microsoft.EntityFrameworkCore;
// using Microsoft.Extensions.DependencyInjection;
// using Server_dotnet.Api.Models;
using Server_dotnet.Api.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<dataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("dataContext") ?? throw new InvalidOperationException("Connection string 'dataContext' not found.")));

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
var services = scope.ServiceProvider;
SeedData.Initialize(services);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(builder =>
            {
                builder.AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowAnyOrigin();
            });

app.UseAuthorization();

app.MapControllers();

app.Run();
