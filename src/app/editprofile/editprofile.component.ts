import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}

  UserEditForm=new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'contact': new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    'password': new FormControl('',[Validators.required,Validators.minLength(5)]),
    'photo': new FormControl('',[Validators.required]),
    'education': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required,Validators.maxLength(600)]),
    'identification': new FormControl('',[Validators.required]),
    'institute':new FormControl('',[Validators.required, Validators.minLength(3)])
}
)
}


