import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MenuComponent } from './component/menu/menu.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { InvoiceFinalComponent } from './components/invoice-final/invoice-final.component';


const routes: Routes = [
  { path: 'error', component: MenuComponent }, 
  { path: 'search', component: SearchPageComponent },
  { path: 'customer', component: CustomerComponent }, 
  { path: 'invoice', component: InvoiceComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'menu', component: MenuComponent }, 
  { path: 'admin', component: AdminComponent }, 
  { path: 'final', component: InvoiceFinalComponent }, 
  { path: '**', component: MenuComponent }, 
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
