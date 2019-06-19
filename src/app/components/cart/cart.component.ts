import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/entities/cart.model';
import { Item } from 'src/app/entities/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total:number = 1;
  total2:number = 2;
  

  @Input() cart:CartItem;


  constructor() { }

  ngOnInit() {
  }
  //Aqui me quedé
  totalPrice(){
    
  }
  

}
