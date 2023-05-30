import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private url = 'http://localhost:8080/item'


  constructor() { }
}
