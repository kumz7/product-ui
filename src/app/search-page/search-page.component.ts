import { Component, OnInit } from '@angular/core';
import { AppService } from '../components/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mType } from '../toast/mType';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  tableData:any;
  isGridEnabled:boolean = false;
  key:string;
  back:string;
  constructor( public service:AppService,
    public router:Router,
    public aRouter:ActivatedRoute
    ) {}
  public search():void{
    this.service.getSearchResult(this.key).subscribe(data=>{
      this.tableData = data; 
    },
    error=>{
      this.service.showToast(error.status+":",error.message,mType.error);
      return error;
    },()=>{
      this.service.showToast("Success","Records retrived",mType.success)
    });
  }
  ngOnInit() {
    this.aRouter.queryParams.subscribe(param=>{
      this.key = param["key"]; 
      this.back = param["back"];
      this.search();
    })
   // this.tableData = this.service.getAllCustomers();
  }
  setCurrentCustomer(){
    this.service.isDisabled = true;
    this.router.navigateByUrl(this.back)
  }
}

