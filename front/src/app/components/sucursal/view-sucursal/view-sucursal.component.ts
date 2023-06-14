import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import { sucursal } from 'src/app/models/sucursal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-sucursal',
  templateUrl: './view-sucursal.component.html',
  styleUrls: ['./view-sucursal.component.css']
})
export class ViewSucursalComponent implements OnInit {
  sucursal = new sucursal();
  sucursalForm: FormGroup;


  sucursalList = new Array<sucursal>()
  sucursal2: any;
  direccion2: any;
  localidad2: any;
  itemList = new Array<item>();

  constructor(private sucursalService:SucursalService, private modelService: NgbModal,private itemService : ItemService ) { }

  idSucursal: number;
  modalSwitch: boolean;


  ngOnInit(){

    this.sucursalService.getAll().subscribe(response => {
    
    
      this.sucursalList = response
    
      console.log(response)
    }, error =>{

      console.log(error)
    })


  }

  delete(id_sucursal: number) {
    this.sucursalService.delete(id_sucursal).subscribe(() => {
      console.log(id_sucursal)
      location.reload()
      alert('Baja Exitosa!')
    }, error => {
      console.error(error)
      if (error.status === 500) {
        alert('Error')
      }
    })

  }

  openModal(content: any, id : number){

    this.sucursal.direccion = "Default";
    this.sucursal.localidad = "Default 2";
    this.sucursal.items = new Array<item>(); 
    
    this.idSucursal = id; 
  
    this.modelService.open(content);
 

    this.sucursalForm = new FormGroup({
      'direccion' : new FormControl(this.sucursal.direccion,Validators.required),
      'localidad': new FormControl(this.sucursal.localidad,Validators.required),
      'id_item': new FormControl(this.sucursal.items,Validators.required),

    })


      //'isbn' = new FormGro(this.item.libro.isbn.{valdators})

    }
  
    
  
  
  

  
  addItem(){
    this.itemList.push(this.id_item.value)
    alert(this.itemList.length)

  }

  get direccion(){return this.sucursalForm.get('direccion')}
  get localidad(){return this.sucursalForm.get('localidad')}
  get id_item(){return this.sucursalForm.get('id_item')}
  
  
  update(){


      let suc = new sucursal();
      suc.items = new Array<item>();
      suc.itemsAux = new Array<number>();
      suc.direccion = this.direccion2.value;
      suc.localidad = this.localidad2.value;
      suc.idSucursal = this.idSucursal;
      this.itemList.forEach(id => {
        
       
        
      });
      suc.itemsAux.forEach(id =>{
      })
  
      this.sucursalService.update(suc,suc.idSucursal).subscribe(response =>{
        alert("Alta exitosa")     
        
      }, error => {
        console.error(error)
        if (error.status === 500 ) {
          alert('Error')
        }
      })
  
      
}
    
  

  openLibros(libros: any, idSucursal : number){

    this.sucursalService.getByID(idSucursal).subscribe(response => {
    
    
      this.itemList = response
    
      console.log(response)
    }, error =>{

      console.log(error)
    })
       
    this.modelService.open(libros);
  

  }
}
