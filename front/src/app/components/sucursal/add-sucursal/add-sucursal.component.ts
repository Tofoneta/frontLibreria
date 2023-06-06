import { Component, OnInit } from '@angular/core';
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
  
  itemList: item[];
  

  



  constructor(private SucursalService : SucursalService, private ItemService: ItemService) { }



  ngOnInit(): void {
    this.sucursal.direccion = "Default";
    this.sucursal.localidad = "Default 2";
    this.sucursal.items = [];
    
 

    this.sucursalForm = new FormGroup({
      'direccion' : new FormControl(this.sucursal.direccion,Validators.required),
      'localidad': new FormControl(this.sucursal.localidad,Validators.required),
      'id_item': new FormControl(this.sucursal.items,Validators.required),

    })
    /**
    this.ItemService.getAll().subscribe(response =>{
      this.itemList = response;
    }, error => {
      console.error(error);
    })
     */
  }

  get direccion(){return this.sucursalForm.get('direccion')}
  get localidad(){return this.sucursalForm.get('localidad')}
  get id_item(){return this.sucursalForm.get('id_item')}

  addItem(){
    let itemAux = new item();
    itemAux.id_item = this.id_item.value;
    alert(itemAux.id_item)
    this.itemList.push(this.id_item.value);
    alert(this.itemList.length)


  }
  
  addSucursal(){
    let suc = new sucursal();
    suc.direccion = this.direccion.value;
    suc.localidad = this.localidad.value;
    suc.items = this.itemList;
    
    
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
