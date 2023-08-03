import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/service/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent {
  formGroup:FormGroup;
  publication:any;
  fileToUpload: File[];

  constructor( private publicationService:PublicationService, private formBuilder:FormBuilder,private router:Router ) { }

  id:any;
  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({description:['',Validators.required],nom:['',Validators.required],
                                           email:['',Validators.required],tel:['',Validators.required],
                                           type:['',Validators.required]})
    this.id=localStorage.getItem("entreprise");
    console.log("test = ",JSON.parse(this.id).id);
  }

  addPub(){
    let formData =new FormData();
    formData.append("description",this.formGroup.value.description);
    formData.append("email",this.formGroup.value.email);
    formData.append("nom",this.formGroup.value.nom);
    formData.append("tel",this.formGroup.value.tel);
    formData.append("type",this.formGroup.value.type);
    formData.append("file",this.fileToUpload[0]);


    this.publicationService.AddPublication(formData).subscribe(
      resultat=>{console.log(resultat);
        Swal.fire('','Ajouter avec succès','success');
      this.router.navigateByUrl("home/listePub")}
    )
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

}



