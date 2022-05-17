import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private logginservice:LoginService, private cookie:CookieService) { }

  ngOnInit(): void {
  this.showuser()
  }

  showuser(){
    let tokens = this.cookie.get("jwt")
    let token = {
      "jwt":JSON.parse(tokens)
    }
    this.logginservice.getuser(token).subscribe((data) => {
      console.log(data)
    })
  }
}
