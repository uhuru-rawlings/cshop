import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from '../services/checkout.service';
import { LoginService } from '../services/login.service';

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
  user:any;
  response:any;
  constructor(private toastr:ToastrService, private logginservice:LoginService,private cookie:CookieService, private checkout:CheckoutService) { }

  ngOnInit(): void {
    this.showuser()
  }

  showuser(){
    let tokens = this.cookie.get("jwt")
    let token = {
      "jwt":JSON.parse(tokens)
    }
    this.logginservice.getuser(token).subscribe((data) => {
      this.user = data
    })
  }
  validateCheckout(){
    if(this.pickupdate === ''|| this.pickupcity === '' || this.adress === '' || this.idnumber === ''|| this.recipientcontact === ''){
      this.toastr.error("Please fill all these details to proceed.")
      return
    }else{
      let details = {
          "user":this.user.id,
          "pickup_date":this.pickupdate,
          "deliveryCity":this.pickupcity,
          "delivery_address":this.adress,
          "receiver_id":this.idnumber,
          "receiver_contact":this.recipientcontact,
      }
      this.checkout.checkOut(details).subscribe((data) => {
        let cartitems:any = localStorage.getItem("cartItems")
        if(data.success){
          let cartitem = JSON.parse(cartitems)
            this.response = data.success
            let cartobj = {
                "user": this.user.id,
                "items": cartitem
            }
          this.checkout.addCart(cartobj).subscribe((data) =>{
            if(data.success){
              localStorage.removeItem("cartItems")
              window.location.reload()
            }
          })
        }
      })
    }
  }
}
