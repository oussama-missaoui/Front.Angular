import { Component } from '@angular/core';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-accueil-prancipale',
  templateUrl: './accueil-prancipale.component.html',
  styleUrls: ['./accueil-prancipale.component.css']
})
export class AccueilPrancipaleComponent {
  constructor(private pubService: PublicationService) {}
  pub:any;
  pubc:any;
  new:any;
  ngOnInit(): void {
    this.getall();
    this.getallc();

  }

  getall() {
    this.pubService.GetAll().subscribe((resultat: any) => {
      this.pubc= resultat;

      this.pub= this.pubc.reverse();
      this.pub=this.pub.slice(0,6);

      console.log('after result: ', this.pub);

  });
  }



  getallc() {
    this.pubService.GetByType("client").subscribe((resultat: any) => {
      this.pubc = resultat;
      console.log('after result: ', this.pubc);

  });
}
}
