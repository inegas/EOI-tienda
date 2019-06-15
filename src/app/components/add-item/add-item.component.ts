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
  item:Item[];
  hidden:boolean = true;

  //Atributos para añadir
  addId:number = null;
  addDescription:string;
  addStock:number;
  addPrice:number;
  addImage:string;


  constructor(private ItemListService:ItemListService) { }

  ngOnInit() {
  }

  showAdd(){
    this.hidden = false;
  };

  noShowAdd(){
    this.hidden = true;
  };

  newItem(item:Item){
    this.ItemListService.createItem(item).subscribe(
    () => {
    item.description = this.addDescription;
    item.stock = this.addStock;
    item.price = this.addPrice;
    item.image = this.addImage;
      }
    );
    
  };

}
