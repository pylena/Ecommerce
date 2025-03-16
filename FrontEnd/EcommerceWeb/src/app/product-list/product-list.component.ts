import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProduct, deleteProduct } from '../State/Product/Product.actions'
import { selectAllProducts, selectProductError } from '../State/Product/Product.selectors';
import { Product } from '../State/Product/Product.reducers';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products$: Observable<Product[]> = this.store.select(selectAllProducts);
  error$: Observable<string | null>;

  constructor(private store: Store, private router: Router) {
    this.products$ = this.store.select(selectAllProducts);
    this.error$ = this.store.select(selectProductError);
  }

  ngOnInit() {
    this.store.dispatch(loadProduct());
    this.products$.subscribe(products => {
      console.log('Products from store:', products);
    });
  }
  navigateToAddProduct() {
    this.router.navigate(['/add-product']);
  }
 // go to Product Details Page
 viewProduct(id: string | undefined) {
  if (!id) {
    console.error('Invalid Product ID:', id); //for testing
    return;
  }
  console.log('Navigating to product ID:', id);
  this.router.navigate(['/product', id]);
}
// Delete Product
deleteProduct(id: string) {
  if (confirm('Are you sure you want to delete this product?')) {
    this.store.dispatch(deleteProduct({ id }));
  }
}





}
