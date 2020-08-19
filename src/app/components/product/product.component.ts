import { Component, OnInit, Input } from '@angular/core';
import { product } from './product';
import { AppService } from '../app.service';
import { utils } from '../utils';

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

  constructor(public service:AppService) { 
    this.object = new product();
    let options = this.service.options;
    this.object.product = utils.filter(options,"PRODUCT");
    this.object.product_make = utils.filter(options,"PRODUCT MAKE");;
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
