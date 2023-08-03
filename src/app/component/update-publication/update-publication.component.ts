import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from 'src/app/service/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent {
  formGroup:FormGroup;
  publication:any;
  fileToUpload: File[];
pub:any;
  constructor( private publicationService:PublicationService, private formBuilder:FormBuilder,private router:Router,private activatedRout:ActivatedRoute ) { }

  id:any;
  idP:any=this.activatedRout.snapshot.params["id"];
  ngOnInit(): void {
    this.getById();
    this.formGroup=this.formBuilder.group({description:['',Validators.required],nom:['',Validators.required],
                                           email:['',Validators.required],tel:['',Validators.required],})
    this.id=localStorage.getItem("entreprise");
    console.log("test = ",JSON.parse(this.id).id);
  }
  getById(){
    this.publicationService.GetById(this.idP).subscribe(
      resultat=>{
        this.pub=resultat
this.formGroup.patchValue({
  description:this.pub.description,nom:this.pub.nom,email:this.pub.email,tel:this.pub.tel
})
      }
    )
  }

  addPub(){
    this.publicationService.UpdatePublicationc(this.formGroup.value,this.idP).subscribe(
      resultat=>{console.log(resultat);
        Swal.fire('','Update avec succès','success');
      this.router.navigateByUrl("home/listePub")}
    )
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

}

