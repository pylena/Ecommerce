using System.ComponentModel.DataAnnotations;

namespace ProductService.Models.Dto
{
    public class ProductDto
    {
        public string Name { get; set; }

       
        public double Price { get; set; }

        public string Description { get; set; }
        public string ImageUrl { get; set; } // Store image url

    }
}
