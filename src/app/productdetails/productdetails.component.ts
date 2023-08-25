import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
 

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  selectform = new FormGroup({
    'typeof': new FormControl()
  })
  constructor(private spinner: NgxSpinnerService){}
    ngOnInit(): void {
      this.spinner.show();
    
        setTimeout(() => {
          this.spinner.hide();
        }, 300);
  
    
  }
type(){
  if(this.selectform.value.typeof=='0'){
    console.log('softcopy')
  }
  else{
    console.log('hardcopy')
  }
  
}
}
