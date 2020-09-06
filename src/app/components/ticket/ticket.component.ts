import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ticket } from './ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit ,OnChanges{
  @Input() object:ticket;
  @Input() isDisabled:boolean;
  @Input() service_list = ["Warranty","Non-Warranty","Free Service","Health Check-up"];
  constructor() {
    
   }
   ngOnChanges(changes: SimpleChanges): void{
   }
   selectServiceType(option:any){
      this.object.service_type = option.value;
    }

  ngOnInit() {
    this.object.date =  new Date().toISOString().split('T')[0]+ "T"+new Date().toLocaleTimeString();
  }

}
