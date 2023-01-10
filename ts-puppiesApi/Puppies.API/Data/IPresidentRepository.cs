using System.Collections.Generic;
using Puppies.API.Controllers;

namespace Puppies.API.Data
{
  public interface IPuppyRepository
  {
    bool SaveChanges();
    Puppy GetOne(string id);
    IEnumerable<Puppy> GetAll();
    Puppy Create(string name, string breed, string BirthDate);
    void Delete(string id);
    Puppy Update(string id, string name, string breed, string BirthDate);
  }
}