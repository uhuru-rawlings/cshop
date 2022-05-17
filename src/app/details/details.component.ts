import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item:any
  constructor(private itemservice:ItemsService) { }

  ngOnInit(): void {
    this.setItem()
  }
  
  setItem(){
    this.item = this.itemservice.item
  }
}
