import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AppService } from 'src/app/components/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, AfterViewInit {
  @Input() object:any;
  constructor(private service:AppService,private router:Router) { }
  ngOnInit(){
    this.object = this.service.currentData;
  }
  ngAfterViewInit(){
    setTimeout(() => {
        window.print(); 
        this.router.navigateByUrl('/menu');
    }, 500);
  }

}
