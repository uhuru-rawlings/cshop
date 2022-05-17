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
    let item_cart = localStorage.getItem("cartItems")
    if(item_cart){
      this.items = JSON.parse(item_cart)
      console.log(this.items)
    }else{
      this.items = "noitems"
    }
  }

  deletCartItem(item:any){
    let item_cart:any =  localStorage.getItem("cartItems")
    if(item_cart){
        
        let arrays = JSON.parse(item_cart)
        let new_array:any = []
        arrays.forEach((x:any) => {
          if(x.id != item.id){
            new_array.push(x)
          }
        })
        localStorage.setItem("cartItems", JSON.stringify(new_array))
       window.location.reload()
    }
  }
}
