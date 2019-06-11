import {
  Component
} from '@angular/core';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Full Stack';
  myItem = [{
      'type': 'Alumno',
      'id': 1,
      'name': 'Angel',
      'surname': 'Banegas',
      'edad': 23,
      'price': 14.99,
      'stock': 4
    },
    {
      'type': 'Alumno',
      'id': 2,
      'name': 'Joselito',
      'surname': 'Gonzalez',
      'edad': 25,
      'price': 5,
      'stock': 8
    },
    {
      'type': 'Alumno',
      'id': 3,
      'name': 'Pacolo',
      'surname': 'Pataton',
      'edad': 0,
      'price': 3.54,
      'stock': 10
    }
  ];
  
totalItem(){
  
  let result2 = this.myItem.reduce( (a , b) =>  a + b.stock, 0 );
  return result2;
  
}


}
 
