import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  hidden:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showAdd(){
    this.hidden = false;
  };

  noShowAdd(){
    this.hidden = true;
  };

}
