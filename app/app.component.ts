import {Component, OnInit} from "@angular/core";
import {Routes,Router,ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector:"my-app",
  template:"<router-outlet></router-outlet>",
  directives:[ROUTER_DIRECTIVES]
})
@Routes([
  //{path: '/',  component: component}
])
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(){
    //this.router.navigate(["/"]);
  }
}
