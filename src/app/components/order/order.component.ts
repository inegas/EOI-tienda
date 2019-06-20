import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/entities/cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cart:CartItem[];
   
  constructor( private cartService:CartService) { }

  ngOnInit() {

    this.cart = this.cartService.cart;
    console.log(this.cart);
  }

}
