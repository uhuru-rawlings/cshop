import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any = ''
  totals:any;
  constructor(private cookie:CookieService,private cartservice:CartService, private router:Router) { }

  ngOnInit(): void {
    this.getUser()
    this.setCart()
  }
  getUser(){
    let usern = this.cookie.get("jwt")
    if(usern){
     this.user = usern
    }else{
      this.router.navigate(['/'])
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
