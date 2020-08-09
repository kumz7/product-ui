import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-disable-component',
  templateUrl: './disable-component.component.html',
  styleUrls: ['./disable-component.component.scss']
})
export class DisableComponentComponent implements OnInit, OnChanges {
  @Input() isDisabled:boolean;
  @ViewChild('disabledom',{static: false}) dom; 
  constructor() { }
  w:string = "0px";
  h:string= "0px";
  ngOnChanges(change:SimpleChanges){
    setTimeout(() => {
      this.w = this.dom.nativeElement.parentElement.nextSibling.offsetWidth+"px";
      this.h = this.dom.nativeElement.parentElement.nextSibling.offsetHeight+"px";
    }, 100);
  }
  ngAfterViewInit(){
  }
  ngOnInit() {
    
  }

}
