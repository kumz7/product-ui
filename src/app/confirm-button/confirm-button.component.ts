import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss']
})
export class ConfirmButtonComponent implements OnInit, OnChanges {
  @Input() header;
  @Input() body;
  @Input() buttons:[];
  @Output() onSelection: EventEmitter < string > = new EventEmitter();
  flag:boolean = true;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
    if(this.header&&this.header.trim().length!=0)
      this.flag = false;
  }
  ngOnInit() {
  }

  close(type){
    this.onSelection.emit(type);
    this.flag = true;
  }
}
