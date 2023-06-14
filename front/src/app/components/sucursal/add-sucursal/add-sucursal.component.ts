import { Component, OnInit, Query } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { item } from 'src/app/models/item';
import { sucursal } from 'src/app/models/sucursal';
import { ItemService } from 'src/app/services/item.service';
import { SucursalService } from 'src/app/services/sucursal.service';
import { createIncrementalProgram } from 'typescript';


@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.css']
})



export class AddSucursalComponent implements OnInit {
  sucursal = new sucursal();
  sucursalForm: FormGroup;
  constructor(
    private SucursalService : SucursalService,
    private itemService: ItemService,
    
    
    ) { }
  

  itemList = new Array<number>();






  ngOnInit(): void {
    this.sucursal.direccion = "Default";
    this.sucursal.localidad = "Default 2";
    this.sucursal.items = new Array<item>(); 
    
 

    this.sucursalForm = new FormGroup({
      'direccion' : new FormControl(this.sucursal.direccion,Validators.required),
      'localidad': new FormControl(this.sucursal.localidad,Validators.required),
      'id_item': new FormControl(this.sucursal.items,Validators.required),

    })

  }

  get direccion(){return this.sucursalForm.get('direccion')}
  get localidad(){return this.sucursalForm.get('localidad')}
  get id_item(){return this.sucursalForm.get('id_item')}

  addItem(){
    this.itemList.push(this.id_item.value)

  }
  
  addSucursal(){
    let suc = new sucursal();
    suc.items = new Array<item>();
    suc.itemsAux = new Array<number>();
    suc.direccion = this.direccion.value;
    suc.localidad = this.localidad.value;  
    this.itemList.forEach(id => {
      
      suc.itemsAux.push(id);
      
    });
    suc.itemsAux.forEach(id =>{
    })

    this.SucursalService.add(suc).subscribe(response =>{
      alert("Alta exitosa")     
      
    }, error => {
      console.error(error)
      if (error.status === 500 ) {
        alert('Error')
      }
    })

    
  }

}
