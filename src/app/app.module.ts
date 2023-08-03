import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ListeClientComponent } from './component/liste-client/liste-client.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { ListePublicationComponent } from './component/liste-publication/liste-publication.component';
import { AddPublicationComponent } from './component/add-publication/add-publication.component';
import { AccueilNavbarComponent } from './component/accueil-navbar/accueil-navbar.component';
import { AccueilFooterComponent } from './component/accueil-footer/accueil-footer.component';
import { AccueilPrancipaleComponent } from './component/accueil-prancipale/accueil-prancipale.component';
import { AccueilCollectionsComponent } from './component/accueil-collections/accueil-collections.component';
import { AccueilCollectionsAnimalerieComponent } from './component/accueil-collections-animalerie/accueil-collections-animalerie.component';
import { AccueilCollectionsVeterinaireComponent } from './component/accueil-collections-veterinaire/accueil-collections-veterinaire.component';
import { AccueilCollectionsDresseurComponent } from './component/accueil-collections-dresseur/accueil-collections-dresseur.component';
import { AccueilCollectionsPsychologeComponent } from './component/accueil-collections-psychologe/accueil-collections-psychologe.component';
import { AccueilAddPubComponent } from './component/accueil-add-pub/accueil-add-pub.component';
import { AccueilCollectionsClientComponent } from './component/accueil-collections-client/accueil-collections-client.component';
import { AccueilMesPubComponent } from './component/accueil-mes-pub/accueil-mes-pub.component';
import { UpdatePublicationComponent } from './component/update-publication/update-publication.component';
import { RecherchePipe } from './pipes/recherche.pipe';
import { AccuilAdviceComponent } from './component/accuil-advice/accuil-advice.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListeClientComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    AddClientComponent,
    ListePublicationComponent,
    AddPublicationComponent,
    AccueilNavbarComponent,
    AccueilFooterComponent,
    AccueilPrancipaleComponent,
    AccueilCollectionsComponent,
    AccueilCollectionsAnimalerieComponent,
    AccueilCollectionsVeterinaireComponent,
    AccueilCollectionsDresseurComponent,
    AccueilCollectionsPsychologeComponent,
    AccueilAddPubComponent,
    AccueilCollectionsClientComponent,
    AccueilMesPubComponent,
    UpdatePublicationComponent,
    RecherchePipe,
    AccuilAdviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
