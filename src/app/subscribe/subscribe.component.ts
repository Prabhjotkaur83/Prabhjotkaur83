import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UploaderprofileService } from '../shared/uploaderprofile/uploaderprofile.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  constructor(private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService, private uploadernotesservice: UploaderprofileService){}
  ngOnInit(): void {
   
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
    if(this.uploadernotesservice.getdetails != null){
    
      this.router.navigateByUrl('/layout/subscribe')
    }
    else{
      
        this.toastr.error('Unauthenticated','Error')
        this.router.navigateByUrl("/layout/uploaderprofile")
      }
}
  


}
