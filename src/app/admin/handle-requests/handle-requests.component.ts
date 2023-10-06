import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-handle-requests',
  templateUrl: './handle-requests.component.html',
  styleUrls: ['./handle-requests.component.css']
})
export class HandleRequestsComponent {
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 200);
}

  decline(){
    Swal.fire({
      title: 'Are you sure you want to decline?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Decline',
      denyButtonText: `No action`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('The request is declined!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }
  approve(){
    Swal.fire({
      title: 'Are you sure you want to approve?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Aprrove',
      denyButtonText: `No action`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Approved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
