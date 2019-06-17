import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Item } from '../../entities/item.model';
import { ItemListService } from '../item-list/item-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  is_edit : boolean = false;
  @Input() item:Item;
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();


/* Aqui va el outPut() y eventEmmiter */
  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
  }

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
    };
  };

  //Output()
  updateItem(item:Item){
    this.itemListService.updateItem(item).subscribe();
  };

  //Output()
  deleteItem():void{
    this.delete.emit(this.item.id);
  };

  isEditable(item:Item){
  item.editable = !item.editable;
 };

 isNotEditable(item:Item){
      item.editable = false;
 };

}
