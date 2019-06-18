import { Component, OnInit,} from '@angular/core';
import { Item } from '../../entities/item.model';
import { ItemListService } from './item-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
  title = 'Full Stack';
  items: Item[];

  constructor(
    private itemListService: ItemListService,
    private router:Router
  ) { }

  ngOnInit() {
   this.getItemList();
  }

  getItemList(){
     this.itemListService.getItemlist()
      .subscribe(
        (data: Item[]) => {
          this.items = data;
          this.items.map(item => {
            item.quantity = null;
          });
        },
        error => console.log(error),
        () => console.log('list load')
      );
  };

  updateItem(item:Item){
    this.itemListService.updateItem(item).subscribe();
  };

  deleteItem(id:number){
    this.itemListService.deleteItem(id).subscribe(
      () => this.getItemList()
    )
  };

  editItem(id:number){
    this.router.navigateByUrl('/item/' + id);
  }
};
