import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploaderprofileService {

  constructor() { }
  setSession(result:any){
  
    localStorage.setItem("name",result.data.name)
    localStorage.setItem("token",result.token)
  }

  getdetails(){
    return localStorage.getItem("name")
  }


  removesession(){
    localStorage.removeItem("name")
    localStorage.removeItem("token")
  }
}
