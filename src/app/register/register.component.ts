import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { SignupService } from '../services/signup.service';

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
  error:any = ''
  success:any = '' 
  errors:any = ''
  successes:any = '' 
  constructor(private route:Router,private toastr:ToastrService, private registerService:SignupService, private cookie:CookieService, private logginservice:LoginService) { }

  ngOnInit(): void {
  }
  
  validateLogin(){
    if(this.useremails === '' || this.userpassword === ''){
      this.toastr.error("Please fill all required fields to login.")
      return
    }else{
      let detail = {
        'useremail':this.useremails,
        'password':this.userpassword
      }
      this.logginservice.login(detail).subscribe((data) =>{
        console.log(data)
        if(data.error){
          this.errors = data.error
        }else{
          const myDate: Date = new Date();
          myDate.setHours( myDate.getHours() + 1 );
          this.cookie.set("jwt",JSON.stringify(data.jwt),myDate)
          let cook = this.cookie.get("jwt")
          if(cook){
            this.route.navigate(['/cshop'])
          }
        }
      })
    }
  }

  validateSignup(){
    if(this.useremail === '' || this.password === '' || this.cpassword === ''){
      this.toastr.error("Please fill all required fields to signup.")
      return
    }else{
      let details = {
        'useremail':this.useremail,
        'password':this.password
      }

      this.registerService.signup(details).subscribe((data) =>{
        if(data.error){
          this.error = data.error
        }else{
          this.success = data.success
        }
      })
    }
  }

  

}
