namespace OrderService.Models
{
    public class Order
    {
        public Guid Id { get; set; } //for iteam in order
        public Guid ProductId { get; set; } //  reference Product service
        public int Quantity { get; set; }
        public double TotalPrice { get; set; }
        public Guid OrderId { get; set; } 

    }
}
