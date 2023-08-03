import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/service/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accueil-add-pub',
  templateUrl: './accueil-add-pub.component.html',
  styleUrls: ['./accueil-add-pub.component.css']
})
export class AccueilAddPubComponent {
  formGroup:FormGroup;
  publication:any;
  fileToUpload: File[];

  constructor( private publicationService:PublicationService, private formBuilder:FormBuilder,private router:Router ) { }
  user:any;
  util:any
  image:any;
  nom:any;
  email:any;
  id:any;
  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({description:['',Validators.required],nom:['',Validators.required],
                                           email:['',Validators.required],tel:['',Validators.required],
                                           type:['client',Validators.required]})



  this.util=localStorage.getItem("client")
  this.user=JSON.parse(this.util)
  this.image=this.user.photo;
  this.email=this.user.email;
  this.id=this.user.id;
  this.nom=this.user.prenom+" "+this.user.nom
  console.log("alooooo= ")


  }

  addPub(){
    let formData =new FormData();
    formData.append("description",this.formGroup.value.description);
    formData.append("email",this.formGroup.value.email);
    formData.append("nom",this.formGroup.value.nom);
    formData.append("tel",this.formGroup.value.tel);
    formData.append("type",this.formGroup.value.type);
    formData.append("file",this.fileToUpload[0]);


    this.publicationService.AddPublicationc(formData,this.id).subscribe(
      resultat=>{console.log(resultat);
        Swal.fire('','Ajouter avec succès','success');
      this.router.navigateByUrl("")}
    )
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

}
