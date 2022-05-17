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
     let new_item = JSON.parse(array_items)
     let ln = new_item.length
     new_item.splice(ln - 1,0,item)
     this.cookie.set("cartItems",new_item)
    }else{
      let new_item = [item]
      this.cookie.set("cartItems",JSON.stringify(new_item))
    }
  }
}
