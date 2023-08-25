import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
  
  constructor(private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService){}
  registerform=new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'contact': new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    'password': new FormControl('',[Validators.required,Validators.minLength(5)])

  }
  )
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    
    
  }
register(){
  console.log(this.registerform.value.email)
  this.toastr.success('Success','Registered Successfully')
this.router.navigateByUrl('/layout/home')
}
}
