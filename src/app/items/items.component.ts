import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  selectitem:any = ''
  items:any
  cateroies:any
  constructor(private itemsservice:ItemsService) { }

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
}
