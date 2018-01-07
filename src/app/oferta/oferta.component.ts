import { Component, OnInit, OnDestroy } from '@angular/core';


import {OfertasService} from '../ofertas.service';
import {Oferta} from '../shared/oferta.model';

import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;
  public oferta: Oferta;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {
    
  }

  ngOnInit() {
    let id:number  = this.route.snapshot.params['id'];

    this.ofertasService.getOfertaPorId(id).then((oferta) => {
      this.oferta = oferta;
    })

    /*this.route.params.subscribe((parametro: any) => {
          console.log(parametro.id);
        }, (erro: any) => {

        }, () => {

        });
      }*/
       let tempo = Observable.interval(2000)

      this.tempoObservableSubscription =  tempo.subscribe((intervalo: number) => {
          console.log(intervalo);
       });

       let meuObservableTeste = Observable.create((observer: Observer<string>) => {

           observer.next('Primeiro evento da stream');

           observer.error('Aconteceu um erro');

           observer.complete();

       });

      this.meuObservableTesteSubscription =  meuObservableTeste.subscribe(  
         (resultado: any) => console.log(resultado),
          (erro: string)  => console.log(erro)
        );
    }

    public onDestroy(): void {
      this.meuObservableTesteSubscription.unsubscribe();
      this.tempoObservableSubscription.unsubscribe();
    }
  
}
