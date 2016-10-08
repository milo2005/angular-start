import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Movie} from "./shared/index";

@Component({
    selector:"my-movie",
    templateUrl:'./app/movies/movie.component.html'

})
export class MovieComponent {
    @Input() movie:Movie;
    @Input() index:number;

    @Output() comprar:EventEmitter<number> =  new EventEmitter<number>();

    comprarPelicula(){
        // .....
        this.comprar.emit(this.index);
    }
}