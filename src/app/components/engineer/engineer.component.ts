import { Component, OnInit, Input } from '@angular/core';
import { Engineer } from './engineer';
import { AppService } from '../app.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {
  @Input() isDisabled:boolean;
  @Input() object:Engineer[];
  aparts;astatus;
  remarks:string ="";
  @Input() parts:Array<string> = [];
  @Input() status:Array<string> = [];
  constructor(public service:AppService) { }
  isList:boolean = true;
  ngOnInit() {
    this.service.engineer = new Engineer();
  }
  showTable(){
    this.isList=!this.isList;
  }
  selectStatus(option){

    this.service.engineer.status =  option;
  }
  selectParts(option){
    this.service.engineer.parts =  option;
  }
}
