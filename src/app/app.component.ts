import {
  Component
} from '@angular/core';

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
      'edad': 23
    },
    {
      'type': 'Alumno',
      'id': 2,
      'name': 'Joselito',
      'surname': 'Gonzalez',
      'edad': 25
    },
    {
      'type': 'Alumno',
      'id': 3,
      'name': 'Pacolo',
      'surname': 'Pataton',
      'edad': 0
    }
  ];
}
