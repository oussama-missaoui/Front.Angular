import { ClientService } from 'src/app/service/client.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: any;
  showMsg: boolean = false;
  test: String;
  constructor(public clientServise: ClientService, private form: FormBuilder, private router: Router) { }
  formGroup: FormGroup;
  ngOnInit(): void {
    this.formGroup = this.form.group({ email: ['', Validators.required], password: ['', Validators.required] })
  }

  post() {

      this.clientServise.Post(this.formGroup.value).subscribe(
        resultat => {
          this.login = resultat;
          console.log(resultat);
          if(this.login != null) {
          if (this.login.role == "admin") {
            localStorage.setItem("statut", "1");
            localStorage.setItem("admin", JSON.stringify(this.login));
            this.router.navigateByUrl("/home");

          }

          else if(this.login.role == "client"){
            localStorage.setItem("statut", "2");
            localStorage.setItem("client", JSON.stringify(this.login));
            this.router.navigateByUrl("/collections");

          }}
          else{
          this.showMsg=true;
        }
      }
      )
    }

}
