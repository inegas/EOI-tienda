import { Component, OnInit} from '@angular/core';


import { Item } from '../../entities/item.model';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
  title = 'Full Stack';
  items: Item[];
  is_edit : boolean = false;

  constructor(
    private itemListService: ItemListService
  ) { }

  ngOnInit() {
   this.getItemList();
  }

  getItemList(){
     this.itemListService.getItemlist()
      .subscribe(
        (data: Item[]) => {
          this.items = data;
          this.items.map(item => {
            item.quantity = null;
          });
        },
        error => console.log(error),
        () => console.log('list load')
      );
  }

 /*  totalItem() {
    let result2:number;
    setTimeout(() => {
       result2 = this.items.reduce((a, b) => a + b.stock, 0);
    }, 500);
    return result2; 
  } */

  itemPlus(item: Item) {
    if (item.stock > 0) {
      item.quantity++;
      item.stock--;
    }
  };

  itemMenos(item: Item) {
    if (item.quantity > 0) {
      item.stock++;
      item.quantity--;
    }
  };

  //Este metodo es para introducir quantity a pelo.
  modelChanged(item: Item) {
    if (item.stock > 0) {
      item.stock -= item.quantity;
    } else if (item.quantity === null) {
       item.stockaux;
    }
  }

  updateItem(item:Item){
    this.itemListService.updateItem(item).subscribe();
  }

  deleteItem(item:Item){
    this.itemListService.deleteItem(item).subscribe(
      () => this.getItemList()
    );
  }

  isEditable(item:Item){
  item.editable = !item.editable;
 }

 isNotEditable(item:Item){
      item.editable = false;
 }

};
