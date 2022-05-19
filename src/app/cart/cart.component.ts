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
  total:any = 0
  constructor(private cookie:CookieService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.setCartItems()
  }
  
  setCartItems(){
    let item_cart = localStorage.getItem("cartItems")
    if(item_cart){
      this.items = JSON.parse(item_cart)
      this.totaPrice()
    }else{
      this.items = "noitems"
    }
  }

  totaPrice(){
      for(let x = 0; x < this.items.length; x++){
        this.total = this.total + this.items[x].qantity
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
  addaTotal(item:any, values:any){
    let item_price = item.item_price
    let item_quantity = values.target.value

    this.total = (this.total - item_price) + (item_quantity * item_price)
  }
}
