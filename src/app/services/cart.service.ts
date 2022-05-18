import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartTotal:number = 0
  cartItems:any;
  constructor(private cookie:CookieService, private toastr:ToastrService) { }
  
 
  addCartTotal(){
    let items:any = localStorage.getItem("cartItems")
    if(items){
      let item =JSON.parse(items)
      this.cartTotal = item.length
    }else{
      this.cartTotal = 0
    }
    
  }
  addCart(item:any){
    item['quantity'] = 1
    let array_items = localStorage.getItem("cartItems")
    if(array_items){
      let item_array = JSON.parse(array_items)
      let final_array:any = item_array.filter((items:any) => items.id != item.id)
      if(item_array.length == final_array.length){
        final_array.push(item)
        localStorage.setItem("cartItems",JSON.stringify(final_array))
        this.toastr.success("Item added successfully.")
        window.location.reload()
      }else{
        this.toastr.error("Item already added to the cart.")
      }
      

    }else{
      let items_array:any = []
      items_array.push(item)
      localStorage.setItem("cartItems",JSON.stringify(items_array))
      this.toastr.success("Item added successfully.")
      window.location.reload()
    }
    
  }
}
