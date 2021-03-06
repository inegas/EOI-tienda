import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Item } from '../../entities/item.model';
import { CartItem } from 'src/app/entities/cart.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  is_edit : boolean = false;
  @Input() item:Item;
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();
  @Output() update:EventEmitter<Item> = new EventEmitter<Item>();
  @Output() edit:EventEmitter<number> = new EventEmitter<number>();
  @Output() add:EventEmitter<CartItem> = new EventEmitter<CartItem>();


/* Aqui va el outPut() y eventEmmiter */
  constructor() { }

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
    this.update.emit(item);
  };

  //Output()
  deleteItem():void{
    this.delete.emit(this.item.id);
  };

  //Output()
  editItem(){
    this.edit.emit(this.item.id);
  }

  isEditable(item:Item){
  item.editable = !item.editable;
 };

 isNotEditable(item:Item){
      item.editable = false;
 };

  //Output()
 addToCart(item:Item){
   this.add.emit(new CartItem(item));
 }

}
