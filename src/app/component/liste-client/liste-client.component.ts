import { Component } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css'],
})
export class ListeClientComponent {
  constructor(private clientService: ClientService) {}
  ngOnInit(): void {
    this.getall();
    // console.log(this.client);
  }
  client: any;
  test: Array<{ nom: String; id: number }>=[];
  unique: Array<{ nom: String; id: number }>=[];
  x: any;

  getall() {
    this.clientService.GetAll().subscribe((resultat: any) => {
      this.client = resultat;
      console.log('after result: ', this.client);
      this.client= this.client.reverse();
      resultat.forEach((element) => {
        console.log('hhh', element.nom,element.id);
        this.test.push({nom:element.nom,id:element.id})


      });

 this.unique = Array.from(new Set(this.test));
      console.log("0000200 ok",this.test);
      console.log("0000300 ok",this.unique);


    });


  }
  activ(c: any) {}
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
        this.clientService.Delete(id).subscribe((reultat) => {
          console.log('supprimer avec succer');

          this.getall();
        });
      } else if (result.isDismissed) {
        console.log('Clicked No, File is safe!');
      }
    });
  }
}
