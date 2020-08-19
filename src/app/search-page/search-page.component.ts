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
  constructor( private service:AppService,
    private router:Router,
    private aRouter:ActivatedRoute
    ) {}
  public search():void{
    this.service.getSearchResult(this.key).subscribe(data=>{
      this.tableData = data; 
    },
    error=>{
      this.service.showToast(error.status,JSON.stringify(error),mType.error);
      return error;
    },()=>{
      this.service.showToast("Success","Records retrived",mType.success)
    });
  }
  ngOnInit() {
    this.aRouter.queryParams.subscribe(param=>{
      this.key = param["key"]; 
      this.search();
    })
   // this.tableData = this.service.getAllCustomers();
  }
  setCurrentCustomer(){
    this.service.isDisabled = true;
    this.router.navigateByUrl('/menu')
  }
}

