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
  isMenu:boolean=true;
  constructor(private route:Router,private service:AppService){
      route.events.subscribe((res:any) => {
        console.log(res.url);
        if(res instanceof NavigationEnd){
          if(res.url.startsWith("/menu"))
            this.isMenu=false;
          else
            this.isMenu=true;

        }
      });
  }
  back(){
    window.history.back();
  }

}
