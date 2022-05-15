import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  selectitem:any = ''
  constructor() { }

  ngOnInit(): void {
  }
  
  onChangeSort(){
    if(this.selectitem !== ''){
      // get sorted.
    }
  }
}
