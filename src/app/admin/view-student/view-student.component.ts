import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}

}
