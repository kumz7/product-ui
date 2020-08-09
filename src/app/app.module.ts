import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { IssueComponent } from './components/issue/issue.component';
import { EstimationComponent } from './components/estimation/estimation.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MenuComponent } from './component/menu/menu.component';
import { DisableComponentComponent } from './disable-component/disable-component.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    TicketComponent,
    IssueComponent,
    EstimationComponent,
    ToastComponent,
    GridComponent,
    SearchPageComponent,
    MenuComponent,
    DisableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  /* provider meant for refresh 404 issue */
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}], 
  bootstrap: [AppComponent]
})
export class AppModule { }
