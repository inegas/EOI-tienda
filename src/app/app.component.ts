import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Full Stack';
  myItem = [{
      'type': 'Item 1',
      'id': 1,
      'name': 'Name',
      'description': 'Short description',
      'edad': 23,
      'price': 14.99,
      'stock': 4
    },
    {
      'type': 'Item 2',
      'id': 2,
      'name': 'Name',
      'description': 'Short description',
      'edad': 25,
      'price': 5,
      'stock': 8
    },
    {
      'type': 'Item 3',
      'id': 3,
      'name': 'Name',
      'description': 'Short description',
      'edad': 0,
      'price': 7.54,
      'stock': 10
    }
  ];

  totalItem() {
    let result2 = this.myItem.reduce((a, b) => a + b.stock, 0);
    return result2;
  };
};
