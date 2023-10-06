import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}

  subjectform=new FormGroup({
    'name': new FormControl('',[Validators.required]),
    
}
)
}



