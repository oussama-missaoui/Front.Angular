import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  constructor(private http:HttpClient) { }
  GetAll(){
    return this.http.get(`http://localhost:8080/pub/findAllPublication`)
  }
  GetByType(type:any){
    return this.http.get(`http://localhost:8080/pub/findByType/`+type)
  }
  GetByIdC(id:any){
    return this.http.get(`http://localhost:8080/pub/findByIdc/`+id)
  }
  GetById(id:any){
    return this.http.get(`http://localhost:8080/pub/findById/`+id)
  }
  AddPublication(pub:any){
    return this.http.post(`http://localhost:8080/pub/addPublication`,pub)
  }
  AddPublicationc(pub:any,id:any){
    return this.http.post(`http://localhost:8080/pub/addPublicationc/`+id,pub)
  }
  UpdatePublicationc(pub:any,id:any){
    return this.http.put(`http://localhost:8080/pub/update/`+id,pub)
  }
  AddContact(id1:any,id2:any,des: any){
    return this.http.post(`http://localhost:8080/pub/addContact/${id1}/${id2}`,des)
  }
  ContactMy(des: any){
    return this.http.post(`http://localhost:8080/pub/ContactMy`,des)
  }
  Delete(id:any){
    return this.http.delete(`http://localhost:8080/pub/delete/`+id)

  }
}
