import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploaderprofileService } from '../shared/uploaderprofile/uploaderprofile.service';
import { UploadnotesService } from '../shared/uploadnotes/uploadnotes.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploaderprofile',
  templateUrl: './uploaderprofile.component.html',
  styleUrls: ['./uploaderprofile.component.css']
})
export class UploaderprofileComponent implements OnInit {
  constructor(private uploadernotesservice: UploaderprofileService, private toastr: ToastrService, private router: Router,private uploadnotesservice: UploadnotesService){}

  uploaderform=new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'photo': new FormControl('',[Validators.required]),
    'education': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required,Validators.maxLength(600)]),
    'identification': new FormControl('',[Validators.required]),
    'institute':new FormControl('',[Validators.required, Validators.minLength(3)])
  }
  )
ngOnInit(): void {
  if(this.uploadernotesservice.getdetails()!= null){
    this.router.navigateByUrl('/layout/subscribe')
    console.log(this.uploadernotesservice.getdetails())
  }
  else{
    this.toastr.error('Unauthenticated','Error')
      this.router.navigateByUrl("/layout/uploadnotes")
  }
}

uploaderprofile(){
  this.uploadernotesservice.setSession(this.uploaderform.value)

  
}
}
