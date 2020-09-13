import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppService } from './components/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-ui';
  appHeader:boolean=true;
  isMenu:boolean=false;
  constructor(private route:Router,public service:AppService){
      route.events.subscribe((res:any) => {
        console.log(res.url);
        if(res instanceof NavigationEnd){
          if(res.url.startsWith("/invoice"))
            this.appHeader=false;
          else
            this.appHeader=true;
          if(res.url.startsWith("/menu")||res.url===("/"))
            this.isMenu=false;
          else
            this.isMenu=true;
        }
      });
      this.service.topHeader.subscribe(data=>{
        this.appHeader = data;
      })
  }
  back(){
    window.history.back();
  }

}
