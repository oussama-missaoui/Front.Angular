import { AccueilMesPubComponent } from './component/accueil-mes-pub/accueil-mes-pub.component';
import { AccueilCollectionsClientComponent } from './component/accueil-collections-client/accueil-collections-client.component';
import { AccueilAddPubComponent } from './component/accueil-add-pub/accueil-add-pub.component';
import { AccueilCollectionsDresseurComponent } from './component/accueil-collections-dresseur/accueil-collections-dresseur.component';
import { AccueilCollectionsPsychologeComponent } from './component/accueil-collections-psychologe/accueil-collections-psychologe.component';
import { AccueilCollectionsVeterinaireComponent } from './component/accueil-collections-veterinaire/accueil-collections-veterinaire.component';
import { AccueilCollectionsAnimalerieComponent } from './component/accueil-collections-animalerie/accueil-collections-animalerie.component';
import { AccueilCollectionsComponent } from './component/accueil-collections/accueil-collections.component';
import { AccueilPrancipaleComponent } from './component/accueil-prancipale/accueil-prancipale.component';
import { AddPublicationComponent } from './component/add-publication/add-publication.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { ListeClientComponent } from './component/liste-client/liste-client.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ContactComponent } from './component/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ListePublicationComponent } from './component/liste-publication/liste-publication.component';
import { GuardGuard } from './guard.guard';
import { UpdatePublicationComponent } from './component/update-publication/update-publication.component';
import { AccuilAdviceComponent } from './component/accuil-advice/accuil-advice.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent ,canActivate: [ GuardGuard ] , children:[
    {path:"",component:ListeClientComponent},
    {path:"addClient",component:AddClientComponent},
    {path:"listePub",component:ListePublicationComponent},
    {path:"addePub",component:AddPublicationComponent},
    {path:"updatePub/:id",component:UpdatePublicationComponent},



  ]},
  {path:"",component:AccueilComponent , children:[
    {path:"",component:AccueilPrancipaleComponent},
    {path:"contact",component:ContactComponent},
    {path:"collections",component:AccueilCollectionsComponent,canActivate: [ GuardGuard ]},
    {path:"animalerie",component:AccueilCollectionsAnimalerieComponent},
    {path:"veterinaire",component:AccueilCollectionsVeterinaireComponent},
    {path:"psychologe",component:AccueilCollectionsPsychologeComponent},
    {path:"dresseur",component:AccueilCollectionsDresseurComponent},
    {path:"client",component:AccueilCollectionsClientComponent},
    {path:"addPub",component:AccueilAddPubComponent},
    {path:"mesPub",component:AccueilMesPubComponent},
    {path:"advice",component:AccuilAdviceComponent},






  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
