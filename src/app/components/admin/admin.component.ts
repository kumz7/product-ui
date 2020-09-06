import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { StoreMap } from './StoreMap';
import { mType } from 'src/app/toast/mType';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selected:string;
  object:StoreMap;
  value:string="";
  values:Array<StoreMap> = [];
  options:Array<string> = ["SERVICE TYPE","CPU","RAM","HDD","PRODUCT","PRODUCT MAKE","ISSUE","CALL STATUS","PART REPLACED","mail.smtp.auth","mail.smtp.starttls.enable","mail.smtp.host","mail.smtp.port","mail.smtp.email","mail.smtp.password"];
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
    if(this.value.trim().length==0){
      this.service.showToast("Warning:","Empty value can not be saved!",mType.warning);
      return;
    }
    this.service.storeMap(this.object).subscribe(data=>{ 
      if(!this.values)
        this.values = [];
      this.values.push(data);
    }
    ,
    error=>{
      this.service.showToast("Info",error.message,mType.error);
    },
    ()=>{
        this.service.showToast("Sucess","Added",mType.success);
    });
  }
  delete(id){
    this.service.deleteMap(id).subscribe(data=>{
      this.getKeyPair();
    }); 
  }
}
