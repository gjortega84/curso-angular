import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'resumir'
})
export class ResumirPipe implements PipeTransform{

    
    transform(valor : string , limite? : any){
        if(!valor){
            return null;
        }

        let cant = limite? limite:40

        return valor.substring(0,cant) + '...'
        
    }
}