import {Component, Input} from "@angular/core";

@Component({
    selector: "my-appbar",
    templateUrl:"./app/shared/appbar.component.html"
})
export class AppBarComponent{
    @Input() title:string;

}