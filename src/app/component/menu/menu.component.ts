import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/components/app.service';
import { customer } from 'src/app/components/customer/customer';
import { ticket } from 'src/app/components/ticket/ticket';
import { issue } from 'src/app/components/issue/issue';
import { estimation } from 'src/app/components/estimation/estimation';
import { product } from 'src/app/components/product/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isEnabled:boolean=true;
  isProduct:boolean = true;
  object:any;
  isDisabled:boolean = false;
  constructor(private service:AppService) { }


  ngOnInit() {
    this.service.getRow().subscribe(data=>{
      if(data.length==0){
        this.clear();
      }
      else{
        this.isDisabled=false;
        this.object = data;
      }
    })
  }
  public toggleCustomer():void {
    this.isEnabled = !this.isEnabled;
  }
  public save(){
    this.service.doMapNavigatetoInvoice();
  }
  public edit(){
    this.isDisabled = true;
  }
  public engineer(){
    this.isProduct = !this.isProduct; 
  }
  public clear(){
    let object:any = {};
    object.customer = new customer();
    object.ticket = new ticket();
    object.issue = new issue();
    object.estimation = new estimation();
    object.product = new product();
    this.service.setRow(object);
    this.object = object;
    this.isDisabled=true;
  }
  public logout(){
    
  }

}
