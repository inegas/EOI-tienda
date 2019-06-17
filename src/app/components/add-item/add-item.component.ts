import { Component, OnInit } from '@angular/core';
import { Item } from '../../entities/item.model';
import { ItemListService } from '../item-list/item-list.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  //Me traigo la estructura del Item
  item:Item;
  
  hidden:boolean = true;

  //Atributos para añadir
  urlImg:string = 'assets/';


  constructor(private itemListService:ItemListService) { }

  ngOnInit() {
    this.item = new Item();
    this.item.id = null;
    this.item.image = `${this.urlImg}`;
    this.item.quantity = null;
  }

  showAdd(){
    this.hidden = false;
  };

  noShowAdd(){
    this.hidden = true;
  };

  newItem(){
    this.itemListService.createItem(this.item).subscribe()
  };
};
