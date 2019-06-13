import { Injectable } from '@angular/core';
import { ITEMS } from './mocks';
import { Item } from '../../entities/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  getItemlist():Item[]{
    return ITEMS;
  }
  constructor() { }
}
