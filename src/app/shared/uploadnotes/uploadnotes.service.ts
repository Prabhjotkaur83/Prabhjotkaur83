import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadnotesService {

  constructor() { }
  setSession(result:any){
  
    localStorage.setItem("title",result.data.title)
    localStorage.setItem("token",result.token)
  }

  gettitle(){
    return localStorage.getItem("title")
  }

  gettoken(){
    return localStorage.getItem("title")
  }

  removesession(){
    localStorage.removeItem("email")
    localStorage.removeItem("token")
  }
}


