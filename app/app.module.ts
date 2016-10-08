import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule}   from '@angular/forms';

import {AppComponent} from "./app.component";
import {AppBarComponent} from './shared/appbar.component';
import {MovieListComponent}  from "./movies/movie-list.component";
import {MovieComponent} from './movies/movie.component';

import {FechaPipe} from "./shared/fecha.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent
        , AppBarComponent
        , MovieListComponent
        , MovieComponent
        , FechaPipe
    ],
    bootstrap: [AppComponent, MovieListComponent]
})
export class AppModule { }