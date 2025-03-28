﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductService.Data;
using ProductService.Models;
using ProductService.Models.Dto;

namespace ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase

    {
        private readonly AppDbContext _db;
        public ProductController(AppDbContext db)
        {
            _db = db;
        }

        //get list of product
        [HttpGet]

        public IActionResult getProducts()
        {
            var products = _db.Products.ToList();
            return Ok(products);
        }
        //get product by id

        [HttpGet("{id}")] // Unique route

        public IActionResult getProductById(Guid id)
        {
            var product = _db.Products.FirstOrDefault(t => t.Id == id);
            if (product == null)
            {
                return NotFound(); // if there is no matching task
            }
            return Ok(product);

        }

        //delete product
        [HttpDelete("{id}")]
        public IActionResult deleteProduct(Guid id)
        {

            var product = _db.Products.FirstOrDefault(t => t.Id == id); // find matching task id
            if (product == null)
            {
                return NotFound();
            }
            _db.Products.Remove(product);
            _db.SaveChanges();
            return Ok(product);
        }

        //update product
        [HttpPut("{id}")]
        public IActionResult updateProduct(Guid id, ProductDto product)
        {
            var updatedProduct = _db.Products.FirstOrDefault(t => t.Id == id);
            if (updatedProduct == null)
            {
                return NotFound();
            }
            updatedProduct.Name = product.Name;
            updatedProduct.Description = product.Description;
            updatedProduct.Price = product.Price;
            updatedProduct.ImageUrl = product.ImageUrl;

            _db.SaveChanges();
            return Ok(updatedProduct);

        }

        [HttpPost]
        public IActionResult addProduct(ProductDto product)
        {
            var new_product = new Product
            {
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                ImageUrl = product.ImageUrl,
            };
            _db.Products.Add(new_product);
            _db.SaveChanges();
            return Ok(new_product); 

        }

        [HttpGet("products")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByIds([FromQuery] Guid[] ids)
        {
            if (ids == null || ids.Length == 0)
            {
                return BadRequest("Error No product ID Provided.");
            }

            var products = await _db.Products
                .Where(p => ids.Contains(p.Id))
                .ToListAsync();

            return Ok(products);
        }

    }
}