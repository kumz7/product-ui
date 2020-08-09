import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MenuComponent } from './component/menu/menu.component';


const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'customer', component: CustomerComponent }, 
  { path: 'menu', component: MenuComponent }, 
  { path: '**', component: MenuComponent }, 
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
