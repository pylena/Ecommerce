import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductApiService } from '../product-api.service';
import { Order, OrderList } from '../State/Order/Order.reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { addOrder } from '../State/Order/Order.actions';


@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  products$ = this.productApiService.getProducts();
  selectedProducts: Order[] = [];

  constructor(
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private productApiService: ProductApiService) {}


    addProduct(productId: string) {
      this.selectedProducts.push({ 
        id: '', 
        productId, 
        quantity, 
        TotalPrice,

        orderId: '' // autogenerte when order is created
      });
      this.snackBar.open('successfully added a product!', 'Close', {
        duration: 3000, // 
      });
    }
  
    placeOrder() {
      const order: OrderList = {
        id: '', // in the backend
        orderItems: this.selectedProducts,
      };
      console.log('Placing a new order:', orderList); 
      this.store.dispatch(addOrder({ orderList })); // Dispatch 
      this.router.navigate(['/orders']);
    }
  }
