import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotItemComponent } from './components/not-item/not-item.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: ItemListComponent},
  {path: '**', component: NotItemComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
