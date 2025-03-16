import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { selectError, selectLoading, selectOrders } from '../State/Order/Order.selectors';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { loadOrders, deleteOrder } from '../State/Order/Order.actions';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit{
  //intilize proprites
  orders$ = this.store.select(selectOrders);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private router: Router, private store: Store, ) {}
  ngOnInit() {
    this.store.dispatch(loadOrders());
  }
  viewOrder(id: string) {
    this.router.navigate(['/order', id]);
  }
  deleteOrder(id: string) {
    if (confirm('do you want to delete this order?')) {
      this.store.dispatch(deleteOrder({ id }));
    }
  }

  navigateToPlaceOrder() {
    this.router.navigate(['/place-order']);
  }
}


