import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-invoice-final',
  templateUrl: './invoice-final.component.html',
  styleUrls: ['./invoice-final.component.scss']
})
export class InvoiceFinalComponent implements OnInit {
  @Input() object:any;
  obj:Array<any>=[];
  description:string;
  qty:number;
  unitprice:number;
  discount:number;
  total:number;
  tableHdr:Array<string>=["Description","Qty","Unit Price","Discount","Total"];
  constructor(public service:AppService) { }
  add(){
    let obj:any = {};
    obj.Description = this.description;
    obj.Qty = this.qty;
    obj["Unit Price"] = this.unitprice;
    obj.Discount = this.discount;
    obj.Total = this.total;
    let tobj = [];
    this.obj.forEach(data=>{
      tobj.push(data);
    })
    tobj.push(obj);
    this.obj = tobj;
  }
  ngOnInit() {
    this.service.getRow().subscribe(data=>{
      this.object = data;
    })
  }
}
