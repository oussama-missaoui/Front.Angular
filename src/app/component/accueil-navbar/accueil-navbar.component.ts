import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accueil-navbar',
  templateUrl: './accueil-navbar.component.html',
  styleUrls: ['./accueil-navbar.component.css']
})
export class AccueilNavbarComponent {
  constructor( private router:Router,private location: Location) { }
  user:any;
  util:any
  image:any;
  nom:any;
  email:any;

  ngOnInit(): void {
    console.log("statutttttt=")
    this.util=localStorage.getItem("statut")
  }

  logOut(){
    this.location.replaceState('');
    window.location.reload();
    localStorage.clear();
    localStorage.setItem("statut","0");
  }
}
