import { Component, OnInit } from '@angular/core';
import { ITEMS } from './mocks';
import { Item } from '../../entities/item.model';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  title = 'Full Stack';
  items: Item[];

  constructor(){}

  ngOnInit() {
    this.items = ITEMS;
    this.items.map(item =>{
      item.quantity = null;
    });
  }

  totalItem() {
    let result2 = this.items.reduce((a, b) => a + b.stock, 0);
    return result2;
  };

  itemPlus(item:Item){
    if(item.stock > 0){
       item.quantity++;
       item.stock--;
    }
  };
  
  itemMenos(item:Item){
    if (item.quantity > 0) {
      item.stock++;
      item.quantity--;
    }
  };

  modelChanged(item:Item){
    if(item.stock > 0 ){
       item.stock -= item.quantity;
    }else if(item.quantity == null){
    }
  }

};
