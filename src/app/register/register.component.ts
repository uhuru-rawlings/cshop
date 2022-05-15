import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  useremails:any = ''
  userpassword:any = ''
  useremail:any = ''
  password:any = ''
  cpassword:any = ''
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  validateLogin(){
    if(this.useremails === '' || this.userpassword === ''){
      this.toastr.error("Please fill all required fields to login.")
      return
    }
  }

  validateSignup(){
    if(this.useremail === '' || this.password === '' || this.cpassword === ''){
      this.toastr.error("Please fill all required fields to signup.")
      return
    }
  }

}
