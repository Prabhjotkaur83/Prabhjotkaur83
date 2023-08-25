import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css']
})
export class ListofproductsComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show();
  
      setTimeout(() => {
        this.spinner.hide();
      }, 300);

}
}
