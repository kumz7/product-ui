import { Component, OnInit, Input } from '@angular/core';
import { Engineer } from './engineer';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {
  @Input() isDisabled:boolean;
  @Input() object:Engineer;

  remarks:string ="";
  parts:Array<string> = ["motherboard","display","keyboard","tracking pad","serial port"];
  status:Array<string> = ["initiated","inprogress","completed"];
  constructor() { }

  ngOnInit() {
  }
  selectStatus(option){
    this.object.status = option;
  }
  selectParts(option){
    this.object.parts = option;
  }
}
