import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private router:Router) { }
user:any;
util:any
image:any;
nom:any;
email:any;
ngOnInit(): void {
  console.log("zzzzzzz",localStorage.getItem("statut"))
  this.util=localStorage.getItem("admin")
  this.user=JSON.parse(this.util)
  this.image=this.user.photo;
  this.email=this.user.email;
  this.nom=this.user.prenom+" "+this.user.nom
  console.log("alooooo= ")

}

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
    localStorage.setItem("statut", "0");
  }
}
