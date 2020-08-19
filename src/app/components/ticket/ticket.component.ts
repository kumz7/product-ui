import { Component, OnInit, Input } from '@angular/core';
import { ticket } from './ticket';
import { AppService } from '../app.service';
import { utils } from '../utils';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() object:ticket;
  @Input() isDisabled:boolean;
  @Input() service_list = [];
  constructor(public service:AppService) {

   }

   selectServiceType(option:string){
      this.object.service_type = option;
    }

  ngOnInit() {
    
  }

}
