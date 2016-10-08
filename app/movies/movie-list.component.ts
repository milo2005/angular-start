import {Component} from '@angular/core';
import {Movie, MovieService} from './shared/index';

@Component({
    selector:"my-list",
    templateUrl:'./app/movies/movie-list.component.html',
    providers:[MovieService]
})
export class MovieListComponent {

    name:string = "Estrenos";
    movies:Movie[];

    constructor(private service:MovieService){
        this.movies = service.data; 
    }

    notificarCompra(index:number){
        alert("Compraste :"+this.movies[index].nombre);
    }

}