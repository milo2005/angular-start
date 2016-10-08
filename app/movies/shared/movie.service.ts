import {Injectable} from "@angular/core";
import {Movie} from "./movie";

@Injectable()
export class MovieService{
    private _data:Movie[];

    public get data():Movie[]{
        if(!this._data){
            this.loadData();
        }
        return this._data;
    }

    private loadData(){
        this._data = [];
        let m1:Movie =  new Movie();
        m1.nombre = "Leather Face";
        m1.genero = "Terror";
        m1.sinopsis = "La pelicula de terror mas grande de la historia";
        m1.image = "http://i267.photobucket.com/albums/ii312/fenom_photo/leatherface-banner.jpg";
        m1.precio = 10000;
        m1.estreno = new Date();

        let m2:Movie =  new Movie();
        m2.nombre = "Doctor Strange";
        m2.genero = "Fantasia";
        m2.sinopsis = "Pelicula de Doctor Strange basada en marvel comics";
        m2.image = "https://i.kinja-img.com/gawker-media/image/upload/s--DamuJtpU--/c_scale,fl_progressive,q_80,w_800/r1i9ounc8hubvh1ofime.jpg";
        m2.precio = 2000;

        this._data.push(m1);
        this._data.push(m2);
    }

}