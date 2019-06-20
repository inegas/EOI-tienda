import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/entities/cart.model';
import { Item } from 'src/app/entities/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  

  @Input() cart:CartItem[];
  


  constructor() { }

  ngOnInit() {
  }
  //Aqui me quedé
  totalPrice(){
    return this.cart.reduce( 
      (acumulator, cartItem) => (cartItem.item.quantity * cartItem.item.price) + acumulator
    , 0);




    // reduce
    // for (const iterator of this.cart) {
    //   console.log(iterator);
      
    //   return iterator.item.price * iterator.item.quantity;
    // }
  }
  

}
