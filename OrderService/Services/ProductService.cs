using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;



namespace OrderService.Services
{
    // File: Services/ProductService.cs

   
    public class ProductService
    {
        private readonly HttpClient _httpClient;

        public ProductService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<Product> GetProductByIdAsync(Guid productId)
        {
            // Make an HTTP GET request to the Product Microservice's API endpoint
            var response = await _httpClient.GetAsync($"https://localhost:7274/api/products/{productId}");

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var product = JsonConvert.DeserializeObject<Product>(content);
                return product;
            }

            return null;
        }
    }

    //to deserialize JSON response
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
    }

}
