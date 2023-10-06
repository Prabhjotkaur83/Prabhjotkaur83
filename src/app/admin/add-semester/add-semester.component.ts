import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css']
})
export class AddSemesterComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}

  category=[
    {id:1,name:'CategoryName1'},
    {id:2,name:'CategoryName2'},
    {id:3,name:'CategoryName3'},
    {id:4,name:'CategoryName4'}
  ];

}
