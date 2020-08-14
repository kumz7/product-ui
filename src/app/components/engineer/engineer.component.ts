import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {
  remarks:string ="";
  parts:Array<string> = ["motherboard","display","keyboard","tracking pad","serial port"];
  status:Array<string> = ["initiated","inprogress","completed"];
  constructor() { }

  ngOnInit() {
  }

}
