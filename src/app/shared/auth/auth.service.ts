import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  setsession(result:any){
    localStorage.setItem("email",result.data.email)
    localStorage.setItem("token",result.token)
  }

  getemail(){
    return localStorage.getItem("email")
  }

  gettoken(){
    return localStorage.getItem("token")
  }

  removesession(){
    localStorage.removeItem("email")
    localStorage.removeItem("token")
  }

}
