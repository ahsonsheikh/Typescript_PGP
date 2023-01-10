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
          Breed = "2001",
          BirthDate = "2009",
          Name = "George W. Bush"
        },
        new Puppy
        {
          Id = "f9ce325d-ed8c-4fad-899b-fc997ed199ad",
          Breed = "2009",
          BirthDate = "2017",
          Name = "Barack Obama"
        },
        new Puppy
        {
          Id = "b769d25a-86dc-4ec6-a022-dfa4112354f9",
          Breed = "2017",
          BirthDate = "2021",
          Name = "Donald Trump"
        },
        new Puppy
        {
          Id = "822dcf18-54eb-4394-8884-1c73addf25c7",
          Breed = "2021",
          Name = "Joe Biden"
        }
      );
    }
  }
}