import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item.model';
import { ItemListService } from '../item-list/item-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

item:Item;


  constructor(
    private itemListService:ItemListService,
    private acRoute:ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit() {
    /* this.getItem() */
    this.acRoute.params.subscribe(params =>{
      const id = <number>params['id'];
      if (id != null) {
        this.itemListService.getItem(id).subscribe(
          (item:Item) =>{
            this.item = item;
          })
      };
    });
  };

  updateItem(item:Item){
    this.itemListService.updateTotalItem(item).subscribe();
    this.route.navigateByUrl('/home');
  };
}

