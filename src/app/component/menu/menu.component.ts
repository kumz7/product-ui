import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/components/app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isEnabled:boolean=true;
  object:any;
  constructor(private service:AppService) { }

  ngOnInit() {
    this.service.getRow().subscribe(data=>{
      this.object = data;
    })
  }
  public toggleCustomer():void {
    this.isEnabled = !this.isEnabled;
  }
  public save(){
    this.service.doMap();
  }
  public update(){
    
  }
  public clear(){
    
  }
  public logout(){
    
  }

}
