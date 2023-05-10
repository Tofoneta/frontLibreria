import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = 'http://localhost:8080/item'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url + '/verItems')
  }

  add(Item: item): Observable<any>{
    return this.http.get(this.url + '/agregarItem')
  }
  getByID(id: Number): Observable<any>{
    return this.http.get(this.url+ '/' + id)
  }
  delete(id:Number): Observable<any>{
    return this.http.post(this.url+"/"+id+"/delete",null)
  }
}
