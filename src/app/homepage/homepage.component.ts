import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { ItemsService } from '../services/items.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items:any
  constructor(private cartservice:CartService,private logginservice:LoginService, private cookie:CookieService,private itemsservice:ItemsService) { }

  ngOnInit(): void {
  this.showuser()
  this.getitems()
  }

  showuser(){
    let tokens = this.cookie.get("jwt")
    let token = {
      "jwt":JSON.parse(tokens)
    }
    this.logginservice.getuser(token).subscribe((data) => {
    })
  }
  getitems(){
    this.itemsservice.getitems().subscribe((data) => {
      this.items  = data
    })
  }
  seeDetails(item:any){
    this.itemsservice.setItemDet(item)
  }

  addToCart(item:any){
    this.cartservice.addCart(item)
  }
}
