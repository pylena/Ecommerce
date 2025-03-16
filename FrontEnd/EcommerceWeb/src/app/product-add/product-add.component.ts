import { Component } from '@angular/core';
import { Product } from '../State/Product/Product.reducers';
import {ProductApiService} from '../product-api.service'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  product: Product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    imageUrl: ''

  };

  constructor(private productApiService : ProductApiService, private router: Router) {}

  addProduct() {
    this.productApiService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
