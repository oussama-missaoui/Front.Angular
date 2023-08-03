import { Component } from "@angular/core";
import { PublicationService } from "src/app/service/publication.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-liste-publication',
  templateUrl: './liste-publication.component.html',
  styleUrls: ['./liste-publication.component.css']
})
export class ListePublicationComponent {
  constructor(private pubService: PublicationService) {}
  pub:any;
  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.pubService.GetAll().subscribe((resultat: any) => {
      this.pub = resultat;
      this.pub= this.pub.reverse();
      console.log('after result: ', this.pub);


  });
}
delete(id: any) {
  // Custom Buttons

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('Clicked Yes, File deleted!');
      this.pubService.Delete(id).subscribe((reultat) => {
        console.log('supprimer avec succer');

        this.getall();
      });
    } else if (result.isDismissed) {
      console.log('Clicked No, File is safe!');
    }
  });
}
update(x:any){

}

}
