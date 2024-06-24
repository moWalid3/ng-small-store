import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`products`);
  }

  getProduct(id: number): Observable<any> {
    return this._HttpClient.get(`products/${id}`)
  }

  getAllCategories(): Observable<any> {
    return this._HttpClient.get(`products/categories`);
  }
}
