import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from './customer/customer';
import { utils } from './utils';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, Data } from '@angular/router';
import { mType } from '../toast/mType';
import { environment } from 'src/environments/environment';
import { StoreMap } from './admin/StoreMap';
import { env } from 'process';
import { Engineer } from './engineer/engineer';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private selectedRow:Subject<any> = new BehaviorSubject([]);
  isDisabled = false;
  isSpinner = false;
  msgHdr:string;
  msg:string;
  type:mType;
  admin:any;
  engineer:Engineer;
  isError = false;
  currentData:any;
  incommingData:any;

  public options:Array<StoreMap>;
  public getCurrentData(){
    return this.currentData;
  }
  public sentEmail(image:any,name,mail){
    return this.request.post(environment.EMAIL_URL+"/"+name+"/"+mail,image);
  }
  public setRow(obj:any){
    this.selectedRow.next(obj);
  }
  public getRow():Observable<any> {
    return this.selectedRow;
  }
  constructor(private request:HttpClient,private router:Router) {
    this.msgHdr="";
    this.msg="";
    this.type=mType.info;
  }
  showToast(hdr,msg,type:mType=mType.success){
    this.msgHdr=hdr;
    this.msg=msg;
    this.type=type;
    setTimeout(() => {
      this.msg = null;
    }, 3000);
  }
  public doMapNavigatetoInvoice():any{
    this.isSpinner=true;
    let subscribe = this.getRow().subscribe(data=>{
      this.currentData = data;
    })
    setTimeout(() => {
      if(this.validateInputs()){
        this.isSpinner=false;
        return;
      }
      subscribe.unsubscribe();
      if(this.engineer.remarks.trim().length!=0)
        this.currentData.engineer.push(this.engineer);
      this.request.post(environment.STORE_OBJECT_URL,this.currentData,{responseType: 'text'}).subscribe(data=>{
        this.incommingData = JSON.parse(data); 
        this.setRow(this.incommingData);
      },
      error=>{
        this.isSpinner=false;
        this.showToast("Error",error,mType.error);
      },
      ()=>{
        this.showToast("Success","Saved!",mType.success);
        this.isSpinner=false;
      })
    }, 500);
    // if(utils.validateEmail(object.mail) && utils.validateMobile(object.contact,false)&& utils.validateMobile(object.altcontact,true) && utils.validateNameSpace(object.name))
    //   this.request.post(environment.STORE_CUSTOMER_URL,object).subscribe(data=>{
    //     console.log("got response");
    //     return data;
    //   },
    //   error=>{
    //     console.log("got error");
    //     return error;
    //   });
  }
  public logout(){
    location.href=environment.LOGOUT_URL;
    // this.request.get(environment.LOGOUT_URL).subscribe(data=>{
    //   console.log("logouted out")
    // })
  }
  public validateInputs():boolean{
    let customer = this.currentData.customer;
    let error = "";
    if(!utils.validateEmail(customer.mail))
      error+="Invalid Email / ";
    if(!utils.validateMobile(customer.contact))
      error+="Invalid Contact / ";
    if(customer.altcontact && !utils.validateMobile(customer.altcontact))
      error+="Invalid Alt.Contact / ";
    if((!customer.name)||(customer.name&&!utils.validateNameSpace(customer.name)))
      error+="Customer Name / ";
      this.showToast("Error",error,mType.error);
    return error.length>0;
  }
  public updateMap(object:customer):any{
    // this.request.put(environment.STORE_CUSTOMER_URL,object).subscribe(data=>{
    //   console.log("got response");
    //   return data;
    // },
    // error=>{
    //   console.log("got error");
    //   return error;
    // });
  }
  public getSearchResult(key:string):Observable<any>{
    return this.request.get(environment.SEARCH_RESULT_URL+"/"+key);
  }

  public gotoJobSheet(param){
    if(param=="exit")
      return;
    this.router.navigate(["/invoice"], { queryParams: { type:param} });
    //this.router.navigateByUrl("/invoice");
  }
  public gotoInvoice(){
    this.router.navigateByUrl("/final");
  }
  /*
    Only perticular day records
  */
  public getDayMapping():any{
    //return this.getCustomer("all");
  }
  //phis.request.post(environment.STORE_OBJECT_URL,this.currentData,{responseType: 'text'})
  public storeMap(obj:StoreMap):Observable<any>{
    return this.request.post(environment.OPTIONS_URL,obj);
  }
  public deleteMap(obj:string):Observable<any>{
    return this.request.delete(environment.OPTIONS_URL+"/"+obj);
  }
  public getMapbyKey(key:string):Observable<any>{
    return this.request.get(environment.OPTIONS_ALL_URL+"/"+key);
  }
  public getAllMap():Observable<any>{
    return this.request.get(environment.ALL_CATEGORY_OPTIONS);
  }
  public isAdmin():Observable<any>{ 
    return this.request.get(environment.IS_ADMIN);
  }
  public gotoAdmin() {
    this.router.navigateByUrl("/admin");   
  }
  public gotoMenu(){
    this.router.navigateByUrl("/menu");
  }
} 