import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { AppService } from '../app.service';
import { Invoice } from './invoice';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';  
@Component({
  selector: 'app-invoice-final',
  templateUrl: './invoice-final.component.html',
  styleUrls: ['./invoice-final.component.scss']
})
export class InvoiceFinalComponent implements OnInit, AfterContentInit {
  object:any;
  height:string="30vh";
  key:string;
  header;
  body;
  buttons;
  contentDataURL:string;
  isPrint:boolean=false;
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
    if(this.object.invoice&&this.object.invoice.date.trim().length==0)
      this.object.invoice.date = new Date().toISOString().split('T')[0] ; //+ "T"+new Date().toLocaleTimeString()
  }
  calcTot(){
    this.object.invoice.sub_total=this.currentPrice;
    this.object.invoice.sales_tax=0;
    this.object.invoice.total_rate=this.object.invoice.sub_total - this.object.estimation.advance_amount;
    this.object.invoice.total=(parseInt(this.object.invoice.others)+this.object.invoice.total_rate);
  }
  search(){
    this.router.navigate(["/search"], { queryParams: { key:this.key,back:'/final' } });
   }
  cls(){
    this.key = "";
  }
  print(type){
    if(type=="exit"){
      this.isPrint = false; 
      return;
    }
    if(type=="Email"){
    let htmlData:any = document.getElementsByClassName("card")[0];
    html2canvas(htmlData).then(canvas=>{
      var imgWidth = document.getElementsByClassName("card")[0].clientWidth;   
      var pageHeight = document.getElementsByClassName("card")[0].clientHeight;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;
      this.contentDataURL = canvas.toDataURL('image/png');  
      let contentDataURL = canvas.toDataURL('image/png');
      this.service.sentEmail(contentDataURL.split(",")[1],this.object.customer.name,this.object.customer.mail).subscribe(data=>{},err=>{},()=>{
      });
    })
    this.isPrint = false;
  }
  else
    setTimeout(() => {
      window.print(); 
      this.isPrint = false;
    }, 500);
  }
  add(){
    let obj:any = {};
    obj.Description = this.description;
    obj.Qty = ""+this.qty;
    obj["Unit Price"] = ""+this.unitprice;
    obj.Discount = ""+this.discount;
    obj.Total = ""+this.total;
    this.currentPrice+= parseInt(obj.Total);
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
      if(this.object.invoice&&this.object.invoice.fields)
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
    this.isPrint = true;
    this.service.setRow(this.object);
    this.service.doMapNavigatetoInvoice();
    this.obj = [];
    this.header="confirm";
    this.body="How do you want to continue";
    this.buttons=["Email","Print"];
  }
}
