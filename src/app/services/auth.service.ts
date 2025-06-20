import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "https://bookstore.incubation.bridgelabz.com"
  constructor(private http : HttpClient) {}
  login(data : {email : string , password : string}){
    const url = `${this.baseUrl}/bookstore_user/login`;
    return this.http.post(url,data);
  }
  signup(data : {fullName : string , email : string , password : string , phone : string}){
    const url = `${this.baseUrl}/bookstore_user/registration`;
    return this.http.post(url,data)
  }
}
