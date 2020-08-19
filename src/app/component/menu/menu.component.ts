import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/components/app.service';
import { customer } from 'src/app/components/customer/customer';
import { ticket } from 'src/app/components/ticket/ticket';
import { issue } from 'src/app/components/issue/issue';
import { estimation } from 'src/app/components/estimation/estimation';
import { product } from 'src/app/components/product/product';
import { Engineer } from 'src/app/components/engineer/engineer';
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
  
  cpu;
  ram;
  hdd;
  issue;
  serviceType;
  product;
  productMake;
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
  
    });
  }

  ngOnInit() {
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
    object.issue = new issue();
    object.estimation = new estimation();
    object.product = new product();
    object.engineer = new Engineer();
    this.service.setRow(object);
    this.object = object;
    this.isDisabled=true;
  }
  public logout(){
    this.service.logout();
  }
  public jobsheet(){
    this.service.gotoJobSheet();
  }

}
