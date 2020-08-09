import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { customer } from './customer';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @Input() isDisabled:boolean;
  @Input() object:customer;
  tableData:any;
  isGridEnabled:boolean = false;
  key:string;
  constructor(
    private router:Router,
    private service:AppService
    ) {

   }
   search(){
    this.router.navigate(["/search"], { queryParams: { key:this.key } });
   }
  ngOnChanges(changes: SimpleChanges): void{
    
  }
  ngOnInit() {
  }

}
