import { Component } from '@angular/core';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-accueil-mes-pub',
  templateUrl: './accueil-mes-pub.component.html',
  styleUrls: ['./accueil-mes-pub.component.css']
})
export class AccueilMesPubComponent {
  constructor(private pubService: PublicationService) {}
  pub:any;
  user:any;
  util:any
  image:any;
  nom:any;
  email:any;
  id:any;
  ngOnInit(): void {
    this.util=localStorage.getItem("client")
    this.user=JSON.parse(this.util)
    this.image=this.user.photo;
    this.email=this.user.email;
    this.id=this.user.id;
    this.nom=this.user.prenom+" "+this.user.nom
    console.log("alooooo= ")
    this.getallc();

  }
  getallc() {
    console.log("id",this.id)
    this.pubService.GetByIdC(this.id).subscribe((resultat: any) => {
      this.pub = resultat;
      console.log('after result: ', this.pub);

  });
}
}
