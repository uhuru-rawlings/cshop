import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any = ''
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    let usern = this.cookie.get("jwt")
    if(usern){
     this.user = usern
    }
  }
  logout(){
    let usern = this.cookie.get("jwt")
    if(usern){
     this.cookie.delete("jwt")
    }
  }
}
