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
  }
  
  setCartItems(){
    let item_cart = this.cookie.get("cartItems")
    if(item_cart){
      this.items = JSON.parse(item_cart)
    }else{
      this.items = "noitems"
    }
  }
}
