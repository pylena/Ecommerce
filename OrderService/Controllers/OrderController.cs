using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderService.Data;
using OrderService.Models;

namespace OrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _db;
        public OrderController(AppDbContext db)
        {
            _db = db;
            
        }
        // GET order list: api/Order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderList>>> GetOrders()
        {
            return Ok(await _db.OrdersList
                .Include(o => o.OrderItems) 
                .ToListAsync());
        }

        // GET order by id: api/Order/id{}
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(Guid id)
        {
            var order = await _db.OrdersList
                .Include(o => o.OrderItems) 
                .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // POST create a new order: api/Order
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(OrderList order)
        {
            _db.OrdersList.Add(order);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }



        // PUT: api/Order/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder(Guid id, OrderList order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }

            _db.Entry(order).State = EntityState.Modified;
            await _db.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Order/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(Guid id)
        {
            var order = await _db.OrdersList.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _db.OrdersList.Remove(order);
            await _db.SaveChangesAsync();

            return NoContent();
        }

       
    }
}
