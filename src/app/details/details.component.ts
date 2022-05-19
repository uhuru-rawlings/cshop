import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item:any
  constructor(private itemservice:ItemsService,private cartservice:CartService, private route:Router) { }

  ngOnInit(): void {
    this.setItem()
    this.checkItem()
  }
   checkItem(){
    if(!this.item){
      this.route.navigate(['/cshop'])
    }
   }
  setItem(){
    this.item = this.itemservice.item
  }
  addToCart(item:any){
    this.cartservice.addCart(item)
  }
}
