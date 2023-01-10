using Microsoft.EntityFrameworkCore;
using Puppies.API.Controllers;

namespace Puppies.API.Data
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Puppy>? Puppies { get; set; }
  }
}