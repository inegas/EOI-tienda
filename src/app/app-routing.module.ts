import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotItemComponent } from './components/not-item/not-item.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ItemListComponent } from './components/item-list/item-list.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: ItemListComponent},
  {path: 'item/:id', component: EditItemComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotItemComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
