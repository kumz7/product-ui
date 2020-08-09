import { Component, OnInit, Input } from '@angular/core';
import { ticket } from './ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() object:ticket;
  service_list = ["Warranty","Non-Warranty","Free Service","Health Check-up"];
  constructor() {
    this.object = new ticket();
    this.object.service_type = this.service_list[0];
   }

   selectServiceType(option:string){
      this.object.service_type = option;
    }

  ngOnInit() {
  }

}
