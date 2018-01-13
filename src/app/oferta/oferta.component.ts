import { Component, OnInit, OnDestroy } from '@angular/core';


import { OfertasService } from '../ofertas.service';
import CarrinhoService from '../carrinho.service';
import { Oferta } from '../shared/oferta.model';

import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoService]
})
export class OfertaComponent implements OnInit {

  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;
  public oferta: Oferta;
  constructor(private route: ActivatedRoute,
              private ofertasService: OfertasService,
              private carrinhoService: CarrinhoService
            ) {

  }

  ngOnInit() {
    this.route.params.subscribe((parametro: Params) => {
      this.ofertasService.getOfertaPorId(parametro.id).then((oferta) => {
        this.oferta = oferta;
      });
    });

    this.carrinhoService.exibirItens();
  }

  public onDestroy(): void {

  }

}
