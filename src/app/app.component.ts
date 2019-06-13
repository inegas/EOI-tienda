import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'NGSSTORE'

text(event){
console.log(event.target.value);
}

};
