import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadnotesService } from '../shared/uploadnotes/uploadnotes.service';
import { UploaderprofileService } from '../shared/uploaderprofile/uploaderprofile.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uploadnotes',
  templateUrl: './uploadnotes.component.html',
  styleUrls: ['./uploadnotes.component.css']
})
export class UploadnotesComponent implements OnInit {
  constructor(private uploadnotesservice: UploadnotesService,private uploaderprofileservice: UploaderprofileService,private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
    if(this.uploadnotesservice.gettitle()!= null){
      this.router.navigateByUrl('/layout/uploaderprofile')
    }
    
}
  
uploadnotesform= new FormGroup({
    'file': new FormControl('',[Validators.required]),
    'cover': new FormControl('',[Validators.required]),
    'image1': new FormControl('',[Validators.required]),
    'image2': new FormControl('',[Validators.required]),
    'image3': new FormControl('',[Validators.required]),
    'title': new FormControl('',[Validators.required,Validators.maxLength(50)]),
    'description': new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(600)]),
    'price': new FormControl('',[Validators.required,Validators.maxLength(4)])
})
uploader(){
  this.uploadnotesservice.setSession(this.uploadnotesform.value) 
  console.log(this.uploadnotesservice.gettitle())
  }

  
}

