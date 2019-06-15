import { Component, OnInit } from '@angular/core';
import { Item } from '../../entities/item.model';
import { ItemListService } from '../item-list/item-list.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  //Me traigo la estructura del Item[]
  items:Item[];
  hidden:boolean = true;

  //Atributos para añadir
  addId:number = null;
  addDescription:string;
  addStock:number;
  addPrice:number;
  addImage:string;


  constructor(private itemListService:ItemListService) { }

  ngOnInit() {
  }

  showAdd(){
    this.hidden = false;
  };

  noShowAdd(){
    this.hidden = true;
  };

  newItem(item:Item){
    this.itemListService.createItem(item).subscribe(
      () =>{
        item.description = this.addDescription;
      }
      
      
    )
  };
};
