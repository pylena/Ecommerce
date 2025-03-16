using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using OrderService.Models;

namespace OrderService.Data
{
    public class AppDbContext : DbContext
    {
       
           public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

           public DbSet<Order> Orders { get; set; }
           public DbSet<OrderList> OrdersList { get; set;}


    }
}
