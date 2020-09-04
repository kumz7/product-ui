import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/components/app.service';
import { customer } from 'src/app/components/customer/customer';
import { ticket } from 'src/app/components/ticket/ticket';
import { issue } from 'src/app/components/issue/issue';
import { estimation } from 'src/app/components/estimation/estimation';
import { product } from 'src/app/components/product/product';
import { Engineer } from 'src/app/components/engineer/engineer';
import { Invoice } from 'src/app/components/invoice-final/invoice';
import { mType } from 'src/app/toast/mType';
import { HttpBackend } from '@angular/common/http';
import { utils } from 'src/app/components/utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isEnabled:boolean=true;
  isProduct:boolean = true;
  object:any;
  isAdmin:boolean = false;
  cpu;
  status;
  parts;
  ram;
  hdd;
  issue;
  serviceType;
  product;
  productMake;

  header;
  body;
  buttons;

  onSelection(event){
      
  }
  isDisabled:boolean = false;
  constructor(public service:AppService) { 
    this.service.getAllMap().subscribe(data=>{
      
      this.cpu = utils.filter(data,"CPU");
      this.ram = utils.filter(data,"RAM");
      this.hdd = utils.filter(data,"HDD");
      this.issue = utils.filter(data,"ISSUE");    
      this.serviceType = utils.filter(data,"SERVICE TYPE");
      this.product = utils.filter(data,"PRODUCT");
      this.productMake = utils.filter(data,"PRODUCT MAKE");
      this.status = utils.filter(data,"CALL STATUS");
      this.parts = utils.filter(data,"PART REPLACED");    
    });
  }
  public invoice(){
    this.service.gotoInvoice();
  }
  ngOnInit() {
    this.service.isAdmin().subscribe(data=>{
      this.isAdmin = data;
    }
    );
    this.service.getRow().subscribe(data=>{
      if(data.length==0){
        this.clear();
      }
      else{
        if(this.service.isDisabled)
          this.isDisabled = false;
        else
          this.isDisabled = true;
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
    object.ticket.date =   new Date().toISOString().split('T')[0];
    object.issue = new issue();
    object.estimation = new estimation();
    object.product = new product();
    object.engineer = [];
    object.invoice = new Invoice();
    this.service.setRow(object);
    this.object = object;
    this.isDisabled=true;
  }
  public logout(){
    this.service.logout();
  }
  public jobsheet(){
    this.header="confirm";
    this.body="How do you want to continue";
    this.buttons=["Email","Print"];
  }
  public admin(){
    this.service.gotoAdmin();
  }
}
