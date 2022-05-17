import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartTotal:number = 0
  cartItems:any;
  constructor(private cookie:CookieService) { }
  
 
  addCartTotal(){
    let array_items = this.cookie.get("cartItems")
    if(array_items){
      let arrays = JSON.parse(array_items)
      this.cartTotal = arrays.length
    }else{
      this.cartTotal = 0
    }
  }
  addCart(item:any){
    let array_items = this.cookie.get("cartItems")
    if(array_items){
     let items = JSON.parse(array_items)
     console.log(items)
    }else{
      let array = []
      array.push(item)
      this.cookie.set("cartItems",JSON.stringify(array))
    }
  }
}
