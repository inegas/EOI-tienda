import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

//Pipes
import { TotalPipe } from './pipes/total.pipe';
import { StorePipe } from './pipes/store.pipe';

//Components
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListService } from './components/item-list/item-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    StorePipe,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
