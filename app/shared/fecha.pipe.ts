import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:"fecha"})
export class FechaPipe implements PipeTransform{
    transform(date:Date):string{
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d =  date.getDate();

        return y+"/"+m+"/"+d;
    }
}