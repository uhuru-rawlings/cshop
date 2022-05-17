import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url:any = 'http://127.0.0.1:8000/cart/checkout/'
  cart:any = 'http://127.0.0.1:8000/cart/addcart/'
  constructor(private http:HttpClient) { }

  checkOut(item:any):Observable<any>{
    return this.http.post(this.url, item)
  }

  addCart(details:any):Observable<any>{
    return this.http.post(this.cart,details)
  }
}
