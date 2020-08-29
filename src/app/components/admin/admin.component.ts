import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { StoreMap } from './StoreMap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selected:string;
  object:StoreMap;
  value:string;
  values:Array<StoreMap>;
  options:Array<string> = ["SERVICE TYPE","CPU","RAM","HDD","ADPT","ODD","P.CORD","BAG","PRODUCT","PRODUCT MAKE","ISSUE","mail.smtp.auth","mail.smtp.starttls.enable","mail.smtp.host","mail.smtp.port","mail.smtp.email","mail.smtp.password"];
  constructor(public service:AppService) { 
    this.object=new StoreMap();
    this.selected = this.options[0];
    this.getKeyPair();
  }
  selectOption(option:string){
    this.selected=option;
    this.getKeyPair();
  }
  getKeyPair(){
    this.service.getMapbyKey(this.selected).subscribe(data=>{
      this.values = data;
  });
  }
  ngOnInit() {
  }
  store(){
    this.object.key=this.selected;
    this.object.value=this.value;
    this.service.storeMap(this.object).subscribe(data=>{ 
      this.values.push(data);
    });
  }
  delete(){
    this.service.deleteMap(this.value).subscribe(data=>{
      console.log("deleted");
    }); 
  }
}
