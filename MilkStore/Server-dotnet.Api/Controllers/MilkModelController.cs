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
    public class MilkModelController : ControllerBase
    {
        private readonly dataContext _context;

        public MilkModelController(dataContext context)
        {
            _context = context;
        }

        // GET: api/MilkModel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MilkModel>>> GetMilkModel()
        {
          if (_context.MilkModel == null)
          {
              return NotFound();
          }
            return await _context.MilkModel.ToListAsync();
        }

        // GET: api/MilkModel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MilkModel>> GetMilkModel(string id)
        {
          if (_context.MilkModel == null)
          {
              return NotFound();
          }
            var milkModel = await _context.MilkModel.FindAsync(id);

            if (milkModel == null)
            {
                return NotFound();
            }

            return milkModel;
        }

        // PUT: api/MilkModel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMilkModel(string id, MilkModel milkModel)
        {
            if (id != milkModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(milkModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MilkModelExists(id))
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

        // POST: api/MilkModel
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MilkModel>> PostMilkModel(MilkModel milkModel)
        {
          if (_context.MilkModel == null)
          {
              return Problem("Entity set 'dataContext.MilkModel'  is null.");
          }
            _context.MilkModel.Add(milkModel);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MilkModelExists(milkModel.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMilkModel", new { id = milkModel.Id }, milkModel);
        }

        // DELETE: api/MilkModel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMilkModel(string id)
        {
            if (_context.MilkModel == null)
            {
                return NotFound();
            }
            var milkModel = await _context.MilkModel.FindAsync(id);
            if (milkModel == null)
            {
                return NotFound();
            }

            _context.MilkModel.Remove(milkModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MilkModelExists(string id)
        {
            return (_context.MilkModel?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
