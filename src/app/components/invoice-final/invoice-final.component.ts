import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { of } from 'rxjs';
import { AppService } from '../app.service';
import { Invoice } from './invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-final',
  templateUrl: './invoice-final.component.html',
  styleUrls: ['./invoice-final.component.scss']
})
export class InvoiceFinalComponent implements OnInit, AfterContentInit {
  object:any;
  key:string;
  currentPrice:number = 0;
  obj:Array<any>=[];
  description:string;
  qty:number;
  unitprice:number;
  discount:number;
  total:number = 0;
  tableHdr:Array<string>=["Description","Qty","Unit Price","Discount","Total"];
  constructor(public service:AppService,public router:Router) { }
  calculate(){
    this.total = this.qty * this.unitprice - this.discount;
  }
  ngAfterContentInit(){
    this.object.invoice.date = new Date().toISOString().split('T')[0] + "T"+new Date().toLocaleTimeString();
  }
  calcTot(){
    this.object.invoice.sub_total=this.currentPrice;
    this.object.invoice.sales_tax=(this.currentPrice/100)*18;
    this.object.invoice.total_rate=this.object.estimation.advance_amount;
    this.object.invoice.total=(parseInt(this.object.invoice.others)+this.object.invoice.sub_total+this.object.invoice.sales_tax)-this.object.invoice.total_rate;
  }
  search(){
    this.router.navigate(["/search"], { queryParams: { key:this.key,back:'/final' } });
   }
  cls(){
    this.key = "";
  }
  add(){
    let obj:any = {};
    obj.Description = this.description;
    obj.Qty = this.qty;
    obj["Unit Price"] = this.unitprice;
    obj.Discount = this.discount;
    obj.Total = this.total;
    this.currentPrice+= obj.Total;
    let tobj = [];
    this.obj.forEach(data=>{
      tobj.push(data);
    })

   this.calcTot(); 
    
    if(!this.object.invoice.fields)
      this.object.invoice.fields = [];
    this.object.invoice.fields[this.object.invoice.fields.length] = [];
    this.object.invoice.fields[this.object.invoice.fields.length-1][0]=""+this.description;
    this.object.invoice.fields[this.object.invoice.fields.length-1][1]=""+this.qty;
    this.object.invoice.fields[this.object.invoice.fields.length-1][2]=""+this.unitprice;
    this.object.invoice.fields[this.object.invoice.fields.length-1][3]=""+this.discount;
    this.object.invoice.fields[this.object.invoice.fields.length-1][4]=""+this.total;

    tobj.push(obj);
    this.obj = tobj;
    this.reset()
  }
  reset(){
    this.description = ""
    this.qty = 0;
    this.unitprice = 0;
    this.discount=0;
    this.total = 0;
  }
  ngOnInit() {
    this.reset();
    this.service.getRow().subscribe(data=>{
      this.object = data;
      if(this.object.invoice.fields)
      this.object.invoice.fields.forEach(element => {
        // this.obj.push(element);
        let obj:any = {};
        obj.Description = element[0];
        obj.Qty = element[1];
        obj["Unit Price"] = element[2];
        obj.Discount = element[3];
        obj.Total = element[4];
        this.currentPrice+= parseInt(obj.Total);
        this.obj.push(obj);
      });
    })
  }
  save(){
    this.service.setRow(this.object);
    this.service.doMapNavigatetoInvoice();
  }
}
