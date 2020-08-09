import { Component, OnInit, Input } from '@angular/core';
import { estimation } from './estimation';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  @Input() object:estimation;
  constructor() {
    this.object = new estimation();
   }

  ngOnInit() {
  }

}
