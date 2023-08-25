import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService,private router: Router,private toastr: ToastrService){}
  loginform=new FormGroup({
    'email': new FormControl('',[Validators.required,Validators.email]),
    'password': new FormControl('',[Validators.required])
  })
ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}
login(){
  if(this.loginform.value.email=='p@gmail.com' && this.loginform.value.password=='123'){
    this.toastr.success('Success','Login Successful')
    this.router.navigateByUrl('/layout/home')
  }
  else{
    this.toastr.error('Error','Invalid Credentials')
  }
}
}
