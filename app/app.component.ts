import {Component} from "@angular/core";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector:"my-app",
  template:"<router-outlet></router-outlet>"
})
export class AppComponent {}
