import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../environments/environment';

import { Oferta } from './shared/oferta.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    private baseUrl: string = `${environment.baseApiUrl}/ofertas`

    constructor(private http: Http) {

    }



    public getOfertas() : Promise<Oferta[]> {
        return  this.http
         .get(`${this.baseUrl}?destaque=true`)
         .toPromise()
         .then( (response: any) => response.json());
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return  this.http
        .get(`${this.baseUrl}?categoria=${categoria}`)
        .toPromise()
        .then( (response: any) => response.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return  this.http
        .get(`${this.baseUrl}/${id}`)
        .toPromise()
        .then( (response: any) => response.json());
    }


   
}