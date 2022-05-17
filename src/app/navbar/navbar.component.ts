import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any = ''
  totals:number = 0
  constructor(private cookie:CookieService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.getUser()
    this.setCart()
  }
  getUser(){
    let usern = this.cookie.get("jwt")
    if(usern){
     this.user = usern
    }
  }
  logout(){
    let usern = this.cookie.get("jwt")
    if(usern){
     this.cookie.delete("jwt")
    }
  }

  setCart(){
    this.cartservice.addCartTotal()
    this.totals = this.cartservice.cartTotal
  }
}
