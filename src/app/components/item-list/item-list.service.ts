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

  getItem(id:number){
    const url = `${this.URL_BASE}/${id}`;
    return this.http.get(url);
  }

  updateItem(item:Item){
    const url = `${this.URL_BASE}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  };

  deleteItem(id:number){
    const url = `${this.URL_BASE}/${id}`;
    return this.http.delete<Item>(url);
  }

  createItem(item:Item){
    const url = `${this.URL_BASE}/`;
    return this.http.post<Item>(url, item, httpOptions);
  }


  updateTotalItem(item:Item){
     const url = `${this.URL_BASE}/${item.id}`;
     return this.http.put<Item>(url, item, httpOptions);
  }
 
}
