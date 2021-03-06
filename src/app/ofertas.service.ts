import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../environments/environment';

import { Oferta } from './shared/oferta.model';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class OfertasService {

    private baseUrl: string = `${environment.baseApiUrl}/ofertas`

    constructor(private http: Http) {

    }



    public getOfertas() : Promise<Oferta[]> {
        return  this.http
         .get(`${this.baseUrl}?destaque=true`)
         .toPromise()
         .then( (response: Response) => response.json());
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return  this.http
        .get(`${this.baseUrl}?categoria=${categoria}`)
        .toPromise()
        .then( (response: Response) => response.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return  this.http
        .get(`${this.baseUrl}/${id}`)
        .toPromise()
        .then( (response: Response) => response.json());
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${environment.baseApiUrl}/como-usar/${id}`)
                .toPromise()
                .then((resposta: Response) => {
                   return  resposta.json().descricao;
                });
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${environment.baseApiUrl}/onde-fica/${id}`)
                .toPromise()
                .then((resposta: Response) => {
                   return  resposta.json().descricao;
                });
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http
            .get(`${this.baseUrl}?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((response: Response) => response.json());
    }



   
}