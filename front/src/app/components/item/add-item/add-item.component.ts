import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { item } from 'src/app/models/item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { libro } from 'src/app/models/libro';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {



  itemN = new item();
  libroN = new libro();
  


  itemForm: FormGroup;
  libroForm: FormGroup;
  constructor(private ItemService : ItemService ) { }


  

  ngOnInit(){

    this.itemN.libro = this.libroN;
    this.itemN.libro.isbn = 0;
    this.itemN.libro.titulo = 'Hola';
    this.itemN.libro.autor = '';
    this.itemN.libro.area = '';
    this.itemN.libro.numeroEdicion = 1;
    this.itemN.libro.cantidadPaginas = 0;
    this.itemN.libro.editorial = '';
    this.itemN.precio = 3000;
    alert(this.itemN.precio)
    this.itemForm = new FormGroup({
      'isbn' : new FormControl(this.itemN.libro.isbn,Validators.required),
      'titulo': new FormControl(this.itemN.libro.titulo,Validators.required),
      'autor': new FormControl(this.itemN.libro.autor,Validators.required),
      'area': new FormControl(this.itemN.libro.area,Validators.required),
      'numeroEdicion': new FormControl(this.itemN.libro.numeroEdicion,Validators.required),
      'paginas': new FormControl(this.itemN.libro.cantidadPaginas,Validators.required),
      'editorial': new FormControl(this.itemN.libro.editorial,Validators.required),
      'precio': new FormControl(this.itemN.precio,Validators.required)


      //'isbn' = new FormGro(this.item.libro.isbn.{valdators})

    })
  
    
  }

  get isbn(){return this.itemForm.get('isbn')}
  get titulo(){return this.itemForm.get('titulo')}
  get autor(){return this.itemForm.get('autor')}
  get area(){return this.itemForm.get('area')}
  get numeroEdicion(){return this.itemForm.get('numeroEdicion')}
  get paginas(){return this.itemForm.get('paginas')}
  get editorial(){return this.itemForm.get('editorial')}
  get precio(){return this.itemForm.get('precio')}
  addItem(){

    let ItemAux = new item();
    let LibroAux = new libro();

    
   
    LibroAux.area = this.area.value;
    LibroAux.autor = this.autor.value;
    LibroAux.cantidadPaginas = this.paginas.value;
    LibroAux.editorial = this.editorial.value;
    LibroAux.isbn = this.isbn.value;
    LibroAux.numeroEdicion = this.numeroEdicion.value;
    LibroAux.titulo = this.titulo.value;
    ItemAux.precio = this.precio.value;


  
    ItemAux.libro = LibroAux;

    alert(this.precio.value);

    //// No se guardan los datos pasados por los válidos porqué ni siquiera los toma. Se guardan los datos de los get

      
    
   

    this.ItemService.add(ItemAux).subscribe(response =>{
      
      
      this.area.setValue('')
      this.autor.setValue('')
      this.paginas.setValue('')
      this.editorial.setValue('')
      this.isbn.setValue('')
      this.numeroEdicion.setValue('')
      this.titulo.setValue('')
      this.precio.setValue('')
      console.log(ItemAux.precio)

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
