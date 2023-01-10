using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Puppies.API.Controllers;

namespace Puppies.API.Data
{
  public class SeedDatabase
  {
    public void PrepPopulation(IApplicationBuilder app)
    {
      using (var serviceScope = app.ApplicationServices.CreateScope())
      {
        SeedData(serviceScope.ServiceProvider.GetService<AppDbContext>());
      }
    }
    private void SeedData(AppDbContext context)
    {
      if (!context.Puppies.Any())
      {
        addPuppies(context);
      }
      context.SaveChanges();
    }

    private void addPuppies(AppDbContext context)
    {
      Console.WriteLine("### Adding products to the empty database");

      context.Puppies.AddRange(
        new Puppy
        {
          Id = "2f81a686-7531-11e8-86e5-f0d5bf731f68",
          Breed = "Bulldog",
          BirthDate = "2021",
          Name = "Bully"
        },
        new Puppy
        {
          Id = "f9ce325d-ed8c-4fad-899b-fc997ed199ad",
          Breed = "Husky",
          BirthDate = "2022",
          Name = "Hush"
        },
        new Puppy
        {
          Id = "b769d25a-86dc-4ec6-a022-dfa4112354f9",
          Breed = "German S",
          BirthDate = "2021",
          Name = "Shef"
        },
        new Puppy
        {
          Id = "822dcf18-54eb-4394-8884-1c73addf25c7",
          Breed = "Dalmation",
          BirthDate = "2021",
          Name = "Dell"
        }
      );
    }
  }
}