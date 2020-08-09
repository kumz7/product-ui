import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-ui';

  constructor(private route:Router){
      route.events.subscribe((res:any) => {
        if(res instanceof NavigationEnd)
          console.log(res.url);
      });
  }

}
