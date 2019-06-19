import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/entities/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart:CartItem;

  constructor() { }

  ngOnInit() {
  }

}
