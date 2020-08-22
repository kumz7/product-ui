import { Component, OnInit, Input } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() isDisabled:boolean;
  @Input() object:product;
  @Input() product_list:Array<string> ;
  @Input() product_make_list:Array<string>;

  constructor() { 
    this.object = new product();
    // this.object.product = this.product_list[0];
    // this.object.product_make = this.product_make_list[0];
  }

  ngOnInit() {
  }
  selectProductMake(option:any){
    this.object.product_make = option.value;
  }
  selectProduct(option:any){
    this.object.product = option.value;
  }
}
