import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pre-upload',
  templateUrl: './pre-upload.component.html',
  styleUrls: ['./pre-upload.component.css']
})
export class PreUploadComponent implements OnInit {
  constructor(private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}
  
}
