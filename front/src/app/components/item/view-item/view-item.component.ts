import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { libro } from 'src/app/models/libro';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})


export class ViewItemComponent implements OnInit {
  libro = new libro();
  item  = new item();
  

  itemList = new Array<item>()
  
  constructor(private ItemService : ItemService ) { }


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

}
