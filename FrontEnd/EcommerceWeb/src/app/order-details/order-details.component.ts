import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../State/Product/Product.reducers';
import { Observable } from 'rxjs/internal/Observable';
import { OrderList } from '../State/Order/Order.reducers';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductApiService } from '../product-api.service';
import { selectOrderById } from '../State/Order/Order.selectors';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  products$: Observable<Product[]> | undefined; 
  order$: Observable<OrderList | undefined> | undefined;

  constructor(
    private productApiService: ProductApiService,
    private route: ActivatedRoute,
    private store: Store,
  )
  {
    const orderId = this.route.snapshot.params['id'];
    this.order$ = this.store.select(selectOrderById(orderId));

    // microservies communication: retrive product details for each order item
    this.products$ = this.order$.pipe(
      switchMap((order) => {
        if (order && order.orderItems.length > 0) {
          const productIds = order.orderItems.map((item) => item.productId);
          return this.productApiService.getProductsByIds(productIds);
        }
        return of([]);
      })
    );
  }

  ngOnInit() {}
}


