import { Component, OnInit, Input } from '@angular/core';
import { issue } from './issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  @Input() object:issue;
  @Input() isDisabled:boolean;
  cpu:Array<string> = ["Pentium-III","Pentium-IV","Dual Core","Core 2 Duo","Intel i3","Intel i5","Intel i7","AMD","Xenon"];
  hdd:Array<string> = ["128GB","250GB","500GB","1TB","2TB","4TB","6TB"];
  ram:Array<string> = ["256MB","512MB","1GB","2GB","4GB","6GB","8GB","12GB","16GB","32GB","64GB","128GB"];
  issues:Array<string> = ["No Power On","No Display","Battery Charging","Blank Screen","Blue screen","Not Booting","Windows re-installation","Flickering Screen","Screen replacement"];

  constructor() {
    this.object = new issue();
    this.object.cpu= this.cpu[0];
    this.object.hdd= this.hdd[0];
    this.object.ram= this.ram[0];
    this.object.issue= this.issues[0];
   }
   
   selectIssue(option:string){
      this.object.issue = option;
    }
    selectRam(option:string){
      this.object.ram = option;
    }
    selectHDD(option:string){
      this.object.hdd = option;
    }
    selectCpu(option:string){
      this.object.cpu = option;
    }
      
  ngOnInit() {
  }

}
