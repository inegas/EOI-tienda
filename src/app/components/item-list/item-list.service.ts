import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from 'src/app/entities/item.model';

const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
  };

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  URL_BASE = 'http://localhost:3000/item-list';

 constructor(private http:HttpClient) { }

  getItemlist(){
    return this.http.get('http://localhost:3000/item-list');
  };

  updateItem(item:Item){
    const url = `${this.URL_BASE}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  };

  deleteItem(item:Item){
    const url = `${this.URL_BASE}/${item.id}`;
    return this.http.delete(url);
  }

  createItem(item:Item){
    const url = `${this.URL_BASE}/${item.id}`;
    return this.http.post(url, item, httpOptions);
  }
 
}
