import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/entities/cart.model';
import { Item } from 'src/app/entities/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Array<CartItem> = [];

  constructor() { }

  addItem(cartItem:CartItem){
    this.cart.push(cartItem);
    return this.cart;
  };

  


}
