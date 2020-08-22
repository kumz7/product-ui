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
  @Input() cpu:Array<string>;
  @Input() hdd:Array<string>;
  @Input() ram:Array<string>;
  @Input() issues:Array<string>;

  constructor() {
    this.object = new issue();
    // this.object.cpu= this.cpu[0];
    // this.object.hdd= this.hdd[0];
    // this.object.ram= this.ram[0];
    // this.object.issue= this.issues[0];
   }
   
   selectIssue(option:any){
      this.object.issue = option.value;
    }
    selectRam(option:any){
      this.object.ram = option.value;
    }
    selectHDD(option:any){
      this.object.hdd = option.value;
    }
    selectCpu(option:any){
      this.object.cpu = option.value;
    }
      
  ngOnInit() {
  }

}
