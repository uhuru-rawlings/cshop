import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url:any = 'http://127.0.0.1:8000/account/registration/'
  constructor(private http:HttpClient) { }

  signup(details:any):Observable<any>{
    return this.http.post(this.url, details)
  }
}
