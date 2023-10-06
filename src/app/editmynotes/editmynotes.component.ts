import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-editmynotes',
  templateUrl: './editmynotes.component.html',
  styleUrls: ['./editmynotes.component.css']
})
export class EditmynotesComponent {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}

  EditMyNotesform= new FormGroup({
    'file': new FormControl('',[Validators.required]),
    'cover': new FormControl('',[Validators.required]),
    'image1': new FormControl('',[Validators.required]),
    'image2': new FormControl('',[Validators.required]),
    'image3': new FormControl('',[Validators.required]),
    'title': new FormControl('',[Validators.required,Validators.maxLength(50)]),
    'description': new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(600)]),
    'price': new FormControl('',[Validators.required,Validators.minLength(4)])
})
}
