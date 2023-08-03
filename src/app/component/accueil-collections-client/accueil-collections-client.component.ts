import { Component } from '@angular/core';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-accueil-collections-client',
  templateUrl: './accueil-collections-client.component.html',
  styleUrls: ['./accueil-collections-client.component.css']
})
export class AccueilCollectionsClientComponent {
  constructor(private pubService: PublicationService) {}
  pub:any;
  term:string="";
  ngOnInit(): void {
    this.getallc();

  }
  getallc() {
    this.pubService.GetByType("client").subscribe((resultat: any) => {
      this.pub = resultat;
      console.log('after result: ', this.pub);

  });
}
}
