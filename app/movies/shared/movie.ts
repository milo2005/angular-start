export class Movie{
    nombre:string;
    image:string;
    genero:string;
    private _estreno:Date;
    sinopsis:string;
    precio:number;

    public get estreno(){
        //if(this._estreno == null)
          //  this._estreno = new Date();
        return this._estreno;
    }

    public set estreno(estreno:Date){
        this._estreno = estreno;
    }
    


}