import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../State/Product/Product.reducers';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private  productService: ProductApiService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = idParam; 
      this.productService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    } else {
      console.error('Invalid Product ID');
    }
  }
}


