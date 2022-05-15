import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
