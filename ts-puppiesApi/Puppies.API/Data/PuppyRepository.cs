using System;
using System.Collections.Generic;
using System.Linq;
using Puppies.API.Controllers;

namespace Puppies.API.Data
{
  public class PuppyRepository : IPuppyRepository
  {
    private readonly AppDbContext _context;

    public PuppyRepository(AppDbContext context) => _context = context;
    public Puppy Create(string name, string breed, int birthYear, string photo)
    {
      var puppy = new Puppy
      {
        Id = Guid.NewGuid().ToString(),
        Name = name,
        Breed = breed,
        BirthYear = birthYear,
        Photo = photo
      };

      _context.Puppies.Add(puppy);
      SaveChanges();
      return puppy;
    }


    public void Delete(string id)
    {
      var puppy = GetOne(id);
      if (puppy == null)
        return;

      _context.Puppies.Remove(puppy);
      SaveChanges();
    }

    public IEnumerable<Puppy> GetAll() => _context.Puppies.ToList();

    public Puppy GetOne(string id) =>
      _context.Puppies.Where(c => c.Id == id)
        .SingleOrDefault();

    public bool SaveChanges() => (_context.SaveChanges() >= 0);
    public Puppy Update(string id, string name, string breed, int birthYear, string photo)
    {
      var puppy = GetOne(id);

      puppy.Name = name;
      puppy.BirthYear = birthYear;
      puppy.Breed = breed;
      puppy.Photo = photo;

      var updatedPuppy = _context.Puppies.Update(puppy);
      _context.SaveChanges();
      return updatedPuppy.Entity;
    }

  }
}
