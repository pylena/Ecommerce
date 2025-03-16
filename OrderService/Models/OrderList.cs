namespace OrderService.Models
{
    public class OrderList
    {
        public Guid Id { get; set; }
        public List<Order> OrderItems { get; set; } = new List<Order>();

    }
}
