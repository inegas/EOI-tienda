import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { AppRoutingModule, routing } from './app-routing.module';

//Pipes
import { TotalPipe } from './pipes/total.pipe';
import { StorePipe } from './pipes/store.pipe';

//Components
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListService } from './components/item-list/item-list.service';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { NotItemComponent } from './components/not-item/not-item.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    StorePipe,
    ItemListComponent,
    ItemComponent,
    AddItemComponent,
    EditItemComponent,
    NotItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
