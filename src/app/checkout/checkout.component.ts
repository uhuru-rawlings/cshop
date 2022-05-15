import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  pickupdate:any = ''
  pickupcity:any = ''
  adress:any = ''
  idnumber:any = ''
  recipientcontact:any = ''
  constructor() { }

  ngOnInit(): void {
  }

}
