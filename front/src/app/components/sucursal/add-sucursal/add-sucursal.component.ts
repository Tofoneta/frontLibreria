import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sucursal } from 'src/app/models/sucursal';
import { SucursalService } from 'src/app/services/sucursal.service';


@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.css']
})
export class AddSucursalComponent implements OnInit {
  sucursal = new sucursal();
  sucursalForm: FormGroup;
 
 


  constructor(private SucursalService : SucursalService) { }



  ngOnInit(): void {
    this.sucursal.direccion = "";
    this.sucursal.localidad = "";
    this.sucursal.id_item = new Array()

    

    this.sucursalForm = new FormGroup({
      'direccion' : new FormControl(this.sucursal.direccion,Validators.required),
      'localidad': new FormControl(this.sucursal.localidad,Validators.required),
      'id_item': new FormControl(this.sucursal.id_item,Validators.required),

    })


  }

  get direccion(){return this.sucursalForm.get('direccion')}
  get localidad(){return this.sucursalForm.get('localidad')}
  get items(){return this.sucursalForm.get('items')}
  
  
  addSucursal(){
    let suc = new sucursal();
    suc.id_item = new Array();
    suc.direccion = this.direccion.value;
    suc.localidad = this.localidad.value;



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
