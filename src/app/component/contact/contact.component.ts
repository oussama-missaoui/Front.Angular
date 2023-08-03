import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from 'src/app/service/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private pubService: PublicationService, private formBuilder:FormBuilder) {}
  formGroup:FormGroup;

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({description:['',Validators.required],email:['', Validators.required],
    nom:['',Validators.required]})
    }

  contact(){
    Swal.fire({
      title: 'Are you sure?',
      text: '',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes , Signed !',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Clicked Yes, File deleted!');
        this.pubService.ContactMy(this.formGroup.value).subscribe((reultat) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        });
      } else if (result.isDismissed) {
        console.log('Clicked No, File is safe!');
      }
    });

  }
}
