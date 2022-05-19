import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  selectitem:any = ''
  items:any
  cateroies:any
  sortedL:any;
  constructor(private cartservice:CartService,private itemsservice:ItemsService) { }

  ngOnInit(): void {
    this.getitems()
    this.getcategories()
  }
  
  onChangeSort(){
    if(this.selectitem !== ''){
      // get sorted.
    }
  }
  getitems(){
    this.itemsservice.getitems().subscribe((data) => {
      this.items  = data
    })
  }
  getcategories(){
    this.itemsservice.getcategories().subscribe((data) => {
      this.cateroies  = data
    })
  }
  seeDetails(item:any){
    this.itemsservice.setItemDet(item)
  }
  addToCart(item:any){
    this.cartservice.addCart(item)
  }
  sortItems(event:any){
    let sortit = event.target.value
    let sorted_List:any = []
    for(let x =0; x < this.items.length; x++){
      if(this.items[x].category.itemcategory == sortit){
        sorted_List.push(this.items[x])
      }
    }
    console.log(sorted_List)
    console.log(this.sortedL)
  }
}
