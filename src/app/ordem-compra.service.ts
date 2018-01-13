import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { Pedido } from './shared/pedido.model';
import { Observable } from 'rxjs/Observable';
import {environment} from '../environments/environment';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class OrdemCompraService {

    private baseUrl: string = `${environment.baseApiUrl}/pedidos`;


    constructor(private http: Http) {

    }
    public efetivarCompra(pedido: Pedido):  Observable<any>{
        console.log('Chegamos até aqui', pedido);
        let body = JSON.stringify(pedido);
        let headers: Headers = new Headers();

        headers.append('Content-Type','application/json');

        return this.http.post(`${this.baseUrl}`,body,
            new RequestOptions({
                headers: headers
            })
        ).map((resposta: Response) => {
            return resposta.json().id;
        })
    }
}