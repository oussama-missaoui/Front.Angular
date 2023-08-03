import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  GetAll(){
    return this.http.get(`http://localhost:8080/client/findAllClient`)
  }
  AddClient(client:any){
    return this.http.post(`http://localhost:8080/client/addClient`,client)
  }
  Delete(id:any){
    return this.http.delete(`http://localhost:8080/client/delete/`+id)
  }
  Post(login:any){
    return this.http.post(`http://localhost:8080/util/login`,login)
  }
}
