import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import { sucursal } from 'src/app/models/sucursal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-sucursal',
  templateUrl: './view-sucursal.component.html',
  styleUrls: ['./view-sucursal.component.css']
})
export class ViewSucursalComponent implements OnInit {
  sucursal = new sucursal();
  

  sucursalList = new Array<sucursal>()
  sucursal2: any;
  direccion2: any;
  localidad2: any;
  

  constructor(private sucursalService:SucursalService, private modelService: NgbModal ) { }

  idSucursal: any;
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

  openModal(content: any, idSucursal : Number){
    this.idSucursal = idSucursal; 
    this.modelService.open(content);
    

  }
  update(){
    
  }
}
