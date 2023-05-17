import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { item } from 'src/app/models/item';
import { FormControl } from '@angular/forms';
import { libro } from 'src/app/models/libro';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  isbn : any;

  titulo: any;
  autor: any;
  area: any;
  edicion: any;
  paginas: any;
  editorial: any;
  precio: any;

  constructor(private ItemService : ItemService ) { }
  item = new item();
  libro = new libro();


  ngOnInit(){
  
    //oid    
  }

  addSucursal(){
    /*

    let Item = new item();
    let Libro = new libro();
    
    Item.libro.isbn = this.isbn;
    Item.libro.area = this.area;
    Item.libro.titulo = this.titulo;
    Item.libro.autor = this.autor;
    Item.libro.editorial = this.editorial;
    Item.libro.edicion = this.edicion;
    Item.libro.cantidadPaginas = this.paginas;
    Item.precio = this.precio;
    */
    //    this.sucursalService.getAll().subscribe(response => {


    let Item = new item();
    let Libro = new libro();
    
    Libro.isbn = this.isbn;
    Libro.area = this.area;
    Libro.titulo = this.titulo;
    Libro.autor = this.autor;
    Libro.editorial = this.editorial;
    Libro.edicion = this.edicion;
    Libro.cantidadPaginas = this.paginas;
    Item.precio = this.precio;
    Item.libro = Libro;


    this.ItemService.add(Item).subscribe(response =>{

      alert("Alta exitosa")     
      
    }, error => {
      console.error(error)
      if (error.status === 500) {
        alert('Error')
      }
    })



    ///    this.ItemService.delete(id_item).subscribe(() => {

  }
}
