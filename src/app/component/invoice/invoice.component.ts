import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AppService } from 'src/app/components/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, AfterViewInit {
  object:any;
  constructor(private service:AppService,private router:Router, private window: Window) { }
  ngOnInit(){
    this.service.getRow().subscribe(obj=>{
      this.object = obj;    
    });
  }
  ngAfterViewInit(){
    setTimeout(() => {
        this.window.print();  
        this.router.navigateByUrl('/menu');
    }, 500);
  }

}
