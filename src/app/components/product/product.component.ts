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
  product_list:Array<string>        = ["Laptop","Desktop","Printer","Scanner","UPS","Server","Storage"];
  product_make_list:Array<string>   = ["Dell","HP","Lenovo","Sony","Acer","Asus","Numeric","ICE","Zebronics","Luminous","APC","Canon","Mercury"]

  constructor() { 
    this.object = new product();
    this.object.product = this.product_list[0];
    this.object.product_make = this.product_make_list[0];
  }

  ngOnInit() {
  }
  selectProductMake(option:string){
    this.object.product_make = option;
  }
  selectProduct(option:string){
    this.object.product = option;
  }
}
