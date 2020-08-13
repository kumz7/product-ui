import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from './customer/customer';
import { constants } from './customer/constants';
import { utils } from './utils';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private selectedRow:Subject<any> = new BehaviorSubject([]);
  public setRow(obj:any){
    this.selectedRow.next(obj);
  }
  public getRow():Observable<any> {
    return this.selectedRow;
  }
  constructor(private request:HttpClient,private router:Router) {}
  isError = false;
  public doMapNavigatetoInvoice():any{
    let subscribe = this.getRow().subscribe(data=>{
      this.request.post(constants.STORE_OBJECT_URL,data,{responseType: 'text'}).subscribe(data=>{
        
      },
      error=>{

      },
      ()=>{
        subscribe.unsubscribe();
        this.router.navigateByUrl("/invoice");
      })
    })
    // if(utils.validateEmail(object.mail) && utils.validateMobile(object.contact,false)&& utils.validateMobile(object.altcontact,true) && utils.validateNameSpace(object.name))
    //   this.request.post(constants.STORE_CUSTOMER_URL,object).subscribe(data=>{
    //     console.log("got response");
    //     return data;
    //   },
    //   error=>{
    //     console.log("got error");
    //     return error;
    //   });
  }
  public updateMap(object:customer):any{
    // this.request.put(constants.STORE_CUSTOMER_URL,object).subscribe(data=>{
    //   console.log("got response");
    //   return data;
    // },
    // error=>{
    //   console.log("got error");
    //   return error;
    // });
  }
  public getSearchResult(key:string):Observable<any>{
    return this.request.get(constants.SEARCH_RESULT_URL+"/"+key);
  }
  /*
    Only perticular day records
  */
  public getDayMapping():any{
    //return this.getCustomer("all");
  }
}