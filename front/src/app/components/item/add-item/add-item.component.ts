import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { item } from 'src/app/models/item';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private ItemService : ItemService ) { }
  item = new item();


  ngOnInit(){
    //oid    
  }

}
