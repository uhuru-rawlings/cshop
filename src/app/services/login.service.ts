import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = 'http://127.0.0.1:8000/account/login/'
  constructor(private http:HttpClient) { }

  login(details:any):Observable<any>{
    return this.http.get(this.url, details)
  }
}
