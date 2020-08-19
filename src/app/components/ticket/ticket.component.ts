import { Component, OnInit, Input } from '@angular/core';
import { ticket } from './ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() object:ticket;
  @Input() isDisabled:boolean;
  @Input() service_list = ["Warranty","Non-Warranty","Free Service","Health Check-up"];
  constructor() {
    
   }

   selectServiceType(option:string){
      this.object.service_type = option;
    }

  ngOnInit() {
  }

}
