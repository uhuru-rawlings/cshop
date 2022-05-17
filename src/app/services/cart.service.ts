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
    let items =this.cookie.get("cartItems")
    if(items){
      let items =JSON.parse(this.cookie.get("cartItems"))
      this.cartTotal = items.length
    }else{
      this.cartTotal = 0
    }
    
  }
  addCart(item:any){
    let array_items = this.cookie.get("cartItems")
    if(array_items){
        let items = JSON.parse(array_items)
        let addit = ''
        items.forEach((x:any) => {
          if(x.id == item.id){
            addit=''
          }else{
            addit='additem'
          }
        })

        if(addit != ''){
          items.push(item)
          // this.cookie.delete("cartItems")
          this.cookie.set("cartItems",JSON.stringify(items))
          this.toastr.success("Item successfully added to the cart")
          window.location.reload()
        }else{
          this.toastr.error("Item already added to the cart")
        }
    }else{
      let array = []
      array.push(item)
      this.cookie.set("cartItems",JSON.stringify(array))
      this.toastr.success("Item successfully added to the cart")
      window.location.reload()
    }
  }
}
