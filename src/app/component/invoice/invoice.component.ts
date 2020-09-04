import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AppService } from 'src/app/components/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';  
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, AfterViewInit {
  object:any;
  subs:Subscription;
  contentDataURL:string;
  type:string;
  constructor(private service:AppService,private router:Router,private aRouter:ActivatedRoute) { }
  ngOnInit(){
    this.aRouter.queryParams.subscribe(param=>{
      this.type = param["type"]; 
    });
     this.subs = this.service.getRow().subscribe(data=>{
      this.object = data;
    })
  }
  ngAfterViewInit(){
    if(this.type=='Email')
    { let htmlData:any = document.getElementsByClassName("container-fluid")[0];
      this.subs.unsubscribe();
      html2canvas(htmlData).then(canvas=>{
        var imgWidth = document.getElementsByClassName("container-fluid")[0].clientWidth;   
        var pageHeight = document.getElementsByClassName("container-fluid")[0].clientHeight;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;
        this.contentDataURL = canvas.toDataURL('image/png')  
        this.service.sentEmail(this.contentDataURL.split(",")[1],this.object.customer.name,this.object.customer.mail).subscribe(data=>{        },error=>{},()=>{
          this.router.navigateByUrl('/menu');
        });
      })
    }
    else
    setTimeout(() => {
        window.print(); 
        this.router.navigateByUrl('/menu');
    }, 500);
  }

}
