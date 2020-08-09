import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { customer } from './customer';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  
  @Input() object:customer;
  tableData:any;
  isGridEnabled:boolean = false;

  constructor(
    private router:ActivatedRoute,
    private service:AppService
    ) {

   }
  ngOnChanges(changes: SimpleChanges): void{
    
  }
  ngOnInit() {
  }

}
