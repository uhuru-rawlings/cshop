import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url:string = 'http://127.0.0.1:8000/cart/clothes/'
  categ:string = 'http://127.0.0.1:8000/cart/categories/'
  constructor(private http:HttpClient) { }

  getitems():Observable<any>{
    return this.http.get(this.url)
  }
  getcategories():Observable<any>{
    return this.http.get(this.categ)
  }
}
