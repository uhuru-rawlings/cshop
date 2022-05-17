import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = 'http://127.0.0.1:8000/account/login/'
  urls:string = 'http://127.0.0.1:8000/account/user/'
  constructor(private http:HttpClient) { }

  login(details:any):Observable<any>{
    return this.http.post(this.url, details)
  }


  getuser(token:any):Observable<any>{
    return this.http.post(this.urls, token)
  }
}
