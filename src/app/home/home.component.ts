import { Component,OnInit } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private toastr: ToastrService,private spinner: NgxSpinnerService){}
ngOnInit(): void {

}
}
