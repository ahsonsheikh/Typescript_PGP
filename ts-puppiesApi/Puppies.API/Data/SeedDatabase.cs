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
          BirthYear = 2021,
          Name = "Bully",
          Photo = "https://www.istockphoto.com/photo/portrait-of-brown-puppy-with-bokeh-background-gm636475496-112934499?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpuppy&utm_term=puppy%3A%3A%3A"
        },
        new Puppy
        {
          Id = "f9ce325d-ed8c-4fad-899b-fc997ed199ad",
          Breed = "Husky",
          BirthYear = 2022,
          Name = "Hush",
          Photo = "https://www.istockphoto.com/photo/sweet-and-cute-corgi-dog-puppy-walking-over-white-background-furry-friend-gm1341633075-421307666?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpuppy&utm_term=puppy%3A%3A%3A"
        },
        new Puppy
        {
          Id = "b769d25a-86dc-4ec6-a022-dfa4112354f9",
          Breed = "German S",
          BirthYear = 2021,
          Name = "Shef",
          Photo = "https://www.istockphoto.com/photo/studio-shot-of-american-staffordshire-terrier-running-isolated-over-white-background-gm1364223795-435500535?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpuppy&utm_term=puppy%3A%3A%3A"
        },
        new Puppy
        {
          Id = "822dcf18-54eb-4394-8884-1c73addf25c7",
          Breed = "Dalmation",
          BirthYear = 2021,
          Name = "Dell",
          Photo = "https://www.istockphoto.com/photo/a-purebred-german-shepherd-puppy-lies-on-the-sidewalk-against-a-wooden-wall-ears-to-gm1358309706-431978116?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpuppy&utm_term=puppy%3A%3A%3A"
        }
      );
    }
  }
}