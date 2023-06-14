import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { libro } from 'src/app/models/libro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})


export class ViewItemComponent implements OnInit {
  modalSwitch:boolean;
  
  

  itemList = new Array<item>()
  isbn2: any;
  titulo2: any;
  autor2: any;
  area2: any;
  edicion2: any;
  paginas2: any;
  editorial2: any;
  precio2: any;

  idItem:number;
  isbn: any;
  titulo: any;
  autor: any;
  area: any;
  numeroEdicion: any;
  paginas: any;
  editorial: any;
  precio: any;
  
  constructor(private ItemService : ItemService, private modalService:NgbModal ) { }


  ngOnInit(){
    this.ItemService.getAll().subscribe(response => {
    
      this.itemList = response
    
      console.log(response)
    }, error =>{

      console.log(error)
    })

  }

  
  delete(id_item: number) {
    this.ItemService.delete(id_item).subscribe(() => {
      console.log(id_item)
      location.reload()
      alert('Baja Exitosa!')
    }, error => {
      console.error(error)
      if (error.status === 500) {
        alert('Error')
      }
    })
  }


  abrirModal(content: any,item: item){
      this.idItem = item.item_id;
      this.modalService.open(content);

  }
  findItem(){
    
  }

  updateItem(){    
      
   

      let Item2 = new item();
      let Libro2 = new libro();
      
      Libro2.isbn = this.isbn;
      Libro2.area = this.area;
      Libro2.titulo = this.titulo;
      Libro2.autor = this.autor;
      Libro2.editorial = this.editorial;
      Libro2.numeroEdicion = this.numeroEdicion;
      Libro2.cantidadPaginas = this.paginas;    
      Item2.precio = this.precio;    
      Item2.libro = Libro2;
      Item2.item_id = this.idItem
  
      this.ItemService.update(Item2,Item2.item_id).subscribe(response =>{
       
  
        alert("Update exitosa")
        
      }, error => {
        console.error(error)
        if (error.status === 500) {
          alert('Error' + this.idItem)
        }
      })
  
  
  
  
    }
    cerrarModal(){
      this.modalSwitch = false;
    }

}




