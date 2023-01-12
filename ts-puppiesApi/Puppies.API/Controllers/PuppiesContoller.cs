using System.ComponentModel.DataAnnotations;
// using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Puppies.API.Data;

namespace Puppies.API.Controllers
{

  public class Puppy
  { 
    [Key]
    public string? Id { get; set; }
    public string? Name { get; set; }
    public string? Breed { get; set; }
    public int BirthYear { get; set; }
    public string? Photo { get; set; }
    
    
  }

  public class AddPuppyRequest
  {
    public string? Name { get; set; }
    public string? Breed { get; set; }
    public int BirthYear { get; set; }
    public string? Photo { get; set; }
  }

  public class UpdatePuppyRequest
  {
    public string? Name { get; set; }
    public string? Breed { get; set; }
    public int BirthYear { get; set; }
    public string? Photo { get; set; }
    
  }

  
  [ApiController]
  [Route("api/[controller]")]
  public class PuppiesController : ControllerBase
  {
    private IPuppyRepository _repo;
    
    public PuppiesController(IPuppyRepository repo) => _repo = repo;
   
    // - GET: `api/puppies`. This should return a list of all puppies in JSON-format.
    [HttpGet]
    public IActionResult GetAllPuppies() 
    {
      return Ok(_repo.GetAll());
    }

    //- GET: `api/puppies/:id`. This should return one puppy in JSON-format.  
    [HttpGet("{id}")]
    public IActionResult GetOnePuppy(string id)
    {
      var getOne = _repo.GetOne(id);
      return (getOne == null) ? NotFound() : Ok(getOne);
    }
    
    //- POST: `api/puppies`. This should create and return the newly added puppy.
    [HttpPost]
    public IActionResult AddNewPuppy(string name, string breed, int birthYear, string photo, AddPuppyRequest httpPostRequest)
    { 
    
      var puppy = _repo.Create(httpPostRequest.Name, httpPostRequest.Breed, httpPostRequest.BirthYear, httpPostRequest.Photo);  
      //return  Created($"https://localhost:7154/api/Puppies/{puppy.Id}", puppy);
      return  CreatedAtAction (nameof(GetOnePuppy), new{id=puppy.Id}, puppy);
      
    }
    
    //- PUT: `api/puppies/:id`. This should put one puppy down (jk, just update the specific puppy).
    [HttpPut("{id}")]
    public IActionResult UpdateOnePuppy(string id, UpdatePuppyRequest httpPutRequest)
    {
      
      var puppyId = _repo.GetAll()
        .Where(x => x.Id == id)
        .Select(y => y.Id).SingleOrDefault();

      if (puppyId == null) 
        return NotFound();

      return Ok(_repo.Update(puppyId, httpPutRequest.Name, httpPutRequest.Breed, httpPutRequest.BirthYear, httpPutRequest.Photo));
    }

    //- DELETE: `api/puppies/:id`. This should actually put one puppy down aka delete it.
    [HttpDelete("{id}")]
    public IActionResult DeleteOnePuppy(string id)
    {
      if (_repo.GetOne(id) == null) 
        return NoContent();
      
      _repo.Delete(id);
      return NoContent(); 
    }
  }
}