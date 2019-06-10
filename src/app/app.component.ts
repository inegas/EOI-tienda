import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Full Stack';
  myItem = {
    'id': 1,
    'name': 'Angel',
    'surname': 'Banegas',
    'edad': 23
  };
}
