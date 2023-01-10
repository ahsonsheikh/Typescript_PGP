using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Puppies.API.Data;

namespace Puppies.API.Controllers
{

  public class Puppy
  { 
    [Key]
    // [Required]
    public string? Id { get; set; }
    public string? Name { get; set; }
    public string? Breed { get; set; }
    public string? BirthDate { get; set; }
  }

  public class AddPuppyRequest
  {
    // [Required]
    public string? Name { get; set; }
    // [Required]
    public string? Breed { get; set; }
    public string? BirthDate { get; set; }
  }

  public class UpdatePuppyRequest
  {
    // [Required]
    public string? Name { get; set; }
    // [Required]
    public string? Breed { get; set; }
    public string? BirthDate { get; set; }
  }

  
  [ApiController]
  [Route("api/puppies")]
  public class PuppiesController : ControllerBase
  {
    private IPuppyRepository _repo;
    
    public PuppiesController(IPuppyRepository repo) => _repo = repo;
   
    [HttpGet]
    public IActionResult GetAllPuppies() 
    {
      return Ok(_repo.GetAll());
    }

    [HttpGet("{id}")]
    public IActionResult GetOnePuppy(string id)
    {
      if (_repo.GetOne(id) == null)
        return NotFound();
      
      return Ok(_repo.GetOne(id));
    }

    [HttpPost]
    public IActionResult AddNewPuppy(string name, string from, string to, AddPuppyRequest httpPostRequest)
    { 
      if (httpPostRequest.Breed == null) 
        return NotFound("The Breed field is required");

      if (httpPostRequest.Name == null)
        return NotFound($"The Name field is required");

      var puppy = _repo.Create(httpPostRequest.Name, httpPostRequest.Breed, httpPostRequest.BirthDate);  
      return  Created($"http://localhost/api/puppies/{puppy.Id}", puppy);
    }
    
    [HttpPut("{id}")]
    public IActionResult UpdateOnePuppy(string id, UpdatePuppyRequest httpPutRequest)
    {
      if (httpPutRequest.Name == null) 
        return NotFound("The Name field is required");

      if (httpPutRequest.Breed == null) 
        return NotFound($"The Breed field is required");
      
      var puppyId = _repo.GetAll()
        .Where(x => x.Breed == httpPutRequest.Breed || x.Name == httpPutRequest.Name)
        .Select(y => y.Id).SingleOrDefault();
      
      if (puppyId == null) 
        return NotFound();

      return Ok(_repo.Update(puppyId, httpPutRequest.Name, httpPutRequest.Breed, httpPutRequest.BirthDate));
    }

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
// A couple of suggestions;
// - If you change the route for the class to `[Route("api/[controller]")]` 
// it will pick up the controller name (easier refactoring down the line).

// - When getting a specific president you can combine the if and assigning the president. 
// That way you won't have to call the repository twice.

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
