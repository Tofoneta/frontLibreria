import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { sucursal } from '../models/sucursal';



@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private url = 'http://localhost:8080/sucursal'


  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get(this.url + '/verSucursales')  }


  add(Sucursal: sucursal): Observable<any>{
    return this.http.get(this.url + '/agregarSucursal')
  }
  getByID(id: Number): Observable<any>{
    return this.http.get(this.url+ '/' + id)
  }
  delete(id:Number): Observable<any>{
    return this.http.post(this.url+"/"+id+"/delete",null)
  }


}
