import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-usernotes',
  templateUrl: './usernotes.component.html',
  styleUrls: ['./usernotes.component.css']
})
export class UsernotesComponent {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}


}
