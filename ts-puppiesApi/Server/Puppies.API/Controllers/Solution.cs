using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Puppies.API.Data;

namespace Puppies.API.Controllers
{

  public class Puppy
  { 
    [Key]
    [Required]
    public string? Id { get; set; }
    public string? Name { get; set; }
    public string? Breed { get; set; }
    public string? BirthDate { get; set; }
  }

  public class AddPuppyRequest
  {
    [Required]
    public string? Name { get; set; }
    // [Required]
    public string? Breed { get; set; }
    public string? BirthDate { get; set; }
  }

  public class UpdatePuppyRequest
  {
    [Required]
    public string? Name { get; set; }
    // [Required]
    public string? Breed { get; set; }
    public string? BirthDate { get; set; }
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
    public IActionResult AddNewPuppy(string name, string breed, string birthDate, AddPuppyRequest httpPostRequest)
    { 
      // if (httpPostRequest.Breed == null) 
      //   return NotFound("The Breed field is required");

      // if (httpPostRequest.Name == null)
      //   return NotFound($"The Name field is required");

      var puppy = _repo.Create(httpPostRequest.Name, httpPostRequest.Breed, httpPostRequest.BirthDate);  
      return  Created($"http://localhost/api/puppies/{puppy.Id}", puppy);
    }
    
    //- PUT: `api/puppies/:id`. This should put one puppy down (jk, just update the specific puppy).
    [HttpPut("{id}")]
    public IActionResult UpdateOnePuppy(string id, UpdatePuppyRequest httpPutRequest)
    {
      // if (httpPutRequest.Name == null) 
      //   return NotFound("The Name field is required");

      // if (httpPutRequest.Breed == null) 
      //   return NotFound($"The Breed field is required");
      
      var puppyId = _repo.GetAll()
        .Where(x => x.Breed == httpPutRequest.Breed || x.Name == httpPutRequest.Name)
        .Select(y => y.Id).SingleOrDefault();
      
      if (puppyId == null) 
        return NotFound();

      return Ok(_repo.Update(puppyId, httpPutRequest.Name, httpPutRequest.Breed, httpPutRequest.BirthDate));
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

// - Since you used data annotations on the request models you could've relied on the built 
// in mechanisms for validating input models. Lines 64-68 & 77-81 are redundant.

// - Take a look at the `CreatedAtAction()`. Makes for cleaner code and no need to concatenate 
// strings for the URL (line 71).

// - Your `UpdateOnePresident()` method is a bit funky. 
// Firstly the id is given in the route so you could have used `_repo.GetOne()` 
// and secondly the model is passed as `UpdatePresidentRequest`, 
// hence the name, from and to parameters have no use. 
//A correct signature would be something like 
// `public IActionResult UpdateOnePresident(string id, UpdatePresidentRequest httpPutRequest)`.

//public IActionResult UpdateOnePuppy(string name, string from, string to, UpdatePuppyRequest httpPutRequest)
