using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server_dotnet.Api.Models;

namespace Server_dotnet.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MilkController : ControllerBase
    {
        private readonly dataContext _context;

        public MilkController(dataContext context)
        {
            _context = context;
        }

        // GET: api/Milk
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Milk>>> GetMilk()
        {
          if (_context.Milk == null)
          {
              return NotFound();
          }
            return await _context.Milk.ToListAsync();
        }

        // GET: api/Milk/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Milk>> GetMilk(string id)
        {
          if (_context.Milk == null)
          {
              return NotFound();
          }
            var milk = await _context.Milk.FindAsync(id);

            if (milk == null)
            {
                return NotFound();
            }

            return milk;
        }

        // PUT: api/Milk/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMilk(string id, Milk milk)
        {
            if (id != milk.id)
            {
                return BadRequest();
            }

            _context.Entry(milk).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MilkExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Milk
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Milk>> PostMilk(Milk milk)
        {
          if (_context.Milk == null)
          {
              return Problem("Entity set 'dataContext.Milk'  is null.");
          }
            _context.Milk.Add(milk);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MilkExists(milk.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMilk", new { id = milk.id }, milk);
        }

        // DELETE: api/Milk/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMilk(string id)
        {
            if (_context.Milk == null)
            {
                return NotFound();
            }
            var milk = await _context.Milk.FindAsync(id);
            if (milk == null)
            {
                return NotFound();
            }

            _context.Milk.Remove(milk);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MilkExists(string id)
        {
            return (_context.Milk?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
