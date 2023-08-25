import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css']
})
export class AddSemesterComponent implements OnInit {
  constructor(){}
  category=[
    {id:1,name:'CategoryName1'},
    {id:2,name:'CategoryName2'},
    {id:3,name:'CategoryName3'},
    {id:4,name:'CategoryName4'}
  ];
ngOnInit(): void {
  
}
}
