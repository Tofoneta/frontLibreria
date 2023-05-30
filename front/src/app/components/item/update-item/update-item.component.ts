import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/models/item';
import { libro } from 'src/app/models/libro';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
isbn: any;
titulo: any;
autor: any;
area: any;
edicion: any;
paginas: any;
editorial: any;
precio: any;

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    


  
  }}