import { Component, OnInit, Input } from '@angular/core';
import { issue } from './issue';
import { AppService } from '../app.service';
import { utils } from '../utils';

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

  constructor(public service:AppService) {
    this.object = new issue();
    let options = this.service.options;
    this.object.cpu= utils.filter(options,"CPU");
    this.object.hdd= utils.filter(options,"HDD");;
    this.object.ram= utils.filter(options,"RAM");;
    this.object.issue= utils.filter(options,"ISSUE");;
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
