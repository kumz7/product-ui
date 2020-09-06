import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AppService } from 'src/app/components/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';  
import { Observable, Subscription } from 'rxjs';
import { mType } from 'src/app/toast/mType';

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
  finalAmount:number=0;
  constructor(private service:AppService,private router:Router,private aRouter:ActivatedRoute) { }
  ngOnInit(){

    this.aRouter.queryParams.subscribe(param=>{
      this.type = param["type"]; 
    });
     this.subs = this.service.getRow().subscribe(data=>{
      this.object = data;
      this.finalAmount = parseInt(this.object.estimation.estimation_quote)+parseInt(this.object.estimation.service_charge)-parseInt(this.object.estimation.advance_amount);
    })
  }
  ngAfterViewInit(){
    this.service.isSpinner = true;
    if(this.type=='Email')
    { let htmlData:any = document.getElementsByClassName("container-fluid")[0];
      this.subs.unsubscribe();
      html2canvas(htmlData).then(canvas=>{
        var imgWidth = document.getElementsByClassName("container-fluid")[0].clientWidth;   
        var pageHeight = document.getElementsByClassName("container-fluid")[0].clientHeight;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;
        this.contentDataURL = canvas.toDataURL('image/png')  
        this.service.sentEmail(this.contentDataURL.split(",")[1],this.object.customer.name,this.object.customer.mail).subscribe(data=>{        },err=>{
          this.service.isSpinner = false;
          this.service.showToast("Error",err.message,mType.error);
          this.router.navigateByUrl('/menu');
        },()=>{
          this.service.isSpinner = false;
          this.service.showToast("Success","Jobsheet Sent to "+ this.object.customer.mail ,mType.success);
          this.router.navigateByUrl('/menu');
        });
      })
    }
    else
    setTimeout(() => {
      this.service.isSpinner = false;
        window.print(); 
        this.service.showToast("Success"," Jobsheet printed succesfully  "+ this.object.customer.mail ,mType.success);
        this.router.navigateByUrl('/menu');
    }, 500);
  }

}
