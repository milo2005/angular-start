import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {routing} from "./app.routes";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }