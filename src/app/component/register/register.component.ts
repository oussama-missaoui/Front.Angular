import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submitted:boolean;
  formGroup:FormGroup;
  fileToUpload: Array<File> = [];
  constructor(private clientService:ClientService,private form:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formGroup=this.form.group({nom:['', Validators.required],prenom:['', Validators.required],
                                  password:['', Validators.required],
                                  email:['', Validators.required],adresse:['', Validators.required],
                                  cin:['', Validators.required],tel:['', Validators.required],})
  }
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  addClient(){
    if (this.formGroup.invalid) {
      this.submitted=true;
      return;
    }
   else {console.log("okkk")

   let formData = new FormData();
   formData.append("nom", this.formGroup.value.nom);
   formData.append("prenom", this.formGroup.value.prenom);
   formData.append("email", this.formGroup.value.email);
   formData.append("password", this.formGroup.value.password);
   formData.append("adresse", this.formGroup.value.adresse);
   formData.append("cin", this.formGroup.value.cin);
   formData.append("tel", this.formGroup.value.tel);
   formData.append("file",this.fileToUpload[0]);

   this.clientService.AddClient(formData).subscribe(
     resultat=>{console.log(resultat);
       Swal.fire('','Ajouter avec succès','success');
     this.router.navigateByUrl("login");
     }

   )}
}
}
