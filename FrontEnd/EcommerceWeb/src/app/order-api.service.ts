import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { OrderList } from './State/Order/Order.reducers';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {
   private orderapi = 'https://localhost:7147/api/Order';
  constructor(private http: HttpClient) { }


  
  getOrders(): Observable<OrderList[]> {
    return this.http.get<OrderList[]>(this.orderapi);
  }

  addOrder(order: OrderList): Observable<OrderList> {
    console.log('adding new order to backend:', order); 
    return this.http.post<OrderList>(this.orderapi, order);
  }

  deleteOrder(id: string): Observable<void> {
    return this.http.delete<void>(`${this.orderapi}/${id}`);
  }
}
