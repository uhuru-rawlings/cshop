import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  validateCheckout(){
    if(this.pickupdate === ''|| this.pickupcity === '' || this.adress === '' || this.idnumber === ''|| this.recipientcontact === ''){
      this.toastr.error("Please fill all these details to proceed.")
      return
    }
  }
}
