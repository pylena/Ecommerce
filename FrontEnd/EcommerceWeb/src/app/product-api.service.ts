import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from './State/Product/Product.reducers';


@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private api = 'https://localhost:7274/api/Product'; 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProductsByIds(ids: string[]): Observable<Product[]> {
    const params = ids.map((id) => `ids=${id}`).join('&');
    return this.http.get<Product[]>(`${this.api}/products?${params}`);
  } //for miceoserives communication

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }

  deleteProduct(Id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${Id}`);
  }
  getProduct(Id: string): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${Id}`);
  }
}
