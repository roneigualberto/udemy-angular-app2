import { PipeTransform, Pipe} from "@angular/core";


@Pipe({
    name: 'descricaoReduzida'
}) 
export class DescricaoReduzida implements PipeTransform {


    public transform(texto: string): string {

        if (texto.length > 15) {
            return texto.substr(0, 15) + '...';
        }

        return texto;

    }

}