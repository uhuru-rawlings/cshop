import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any;
  constructor(private cookie:CookieService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.setCartItems()
  }
  
  setCartItems(){
    let item_cart = this.cookie.get("cartItems")
    if(item_cart){
      this.items = JSON.parse(item_cart)
      console.log(this.items)
    }else{
      this.items = "noitems"
    }
  }

  deletCartItem(item:any){
    let item_cart = this.cookie.get("cartItems")
    let arrays = JSON.parse(item_cart)
    let new_cart:any = []
    arrays.forEach((x:any) =>{
      if(x.id == item.id){

      }else{
        new_cart.push(x)
      }
    })
    this.cookie.set("cartItems", JSON.parse(new_cart))
    window.location.reload()
  }
}
