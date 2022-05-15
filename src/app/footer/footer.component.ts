import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  emailadress:any = ''
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  validateNewslater(){
    if(this.emailadress === ''){
      this.toastr.error("Please provide email adress.")
      return
    }
  }
}
