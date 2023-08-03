import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from 'src/app/service/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accueil-collections-dresseur',
  templateUrl: './accueil-collections-dresseur.component.html',
  styleUrls: ['./accueil-collections-dresseur.component.css']
})
export class AccueilCollectionsDresseurComponent {
  constructor(private pubService: PublicationService, private formBuilder:FormBuilder) {}
  pub:any;
  user:any;
  idii:any;
  util:any;
  term:string="";
  formGroup:FormGroup;
  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({description:['Contact Me',Validators.required]})
    this.getall();
    this.util=localStorage.getItem("client")
    this.user=JSON.parse(this.util)
    this.idii=this.user.id;
  }

  getall() {
    this.pubService.GetByType("Dresseur").subscribe((resultat: any) => {
      this.pub = resultat;
      console.log('after result: ', this.pub);

  });
}
contact(x:any){
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
      this.pubService.AddContact(x,this.idii,this.formGroup.value).subscribe((reultat) => {
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

        this.getall();
      });
    } else if (result.isDismissed) {
      console.log('Clicked No, File is safe!');
    }
  });

}
}
