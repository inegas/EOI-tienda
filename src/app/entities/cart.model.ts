import { Item } from './item.model';

export class CartItem {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }
};