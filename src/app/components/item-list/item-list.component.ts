import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

title = 'Full Stack';
myItem = [{
  
      'id': 1,
      'name': 'Name',
      'description': 'Short description',
      'price': 14.99,
      'stock': 4
    },
    {
      'id': 2,
      'name': 'Name',
      'description': 'Short description',
      'price': 5,
      'stock': 8
    },
    {
      'id': 3,
      'name': 'Name',
      'description': 'Short description',
      'price': 7.54,
      'stock': 10
    }
  ];

  totalItem() {
    let result2 = this.myItem.reduce((a, b) => a + b.stock, 0);
    return result2;
  };
  
};
