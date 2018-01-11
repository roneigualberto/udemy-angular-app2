import { Component, OnInit, OnDestroy } from '@angular/core';


import { OfertasService } from '../ofertas.service';
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
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;
  public oferta: Oferta;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {

  }

  ngOnInit() {
    this.route.params.subscribe((parametro: Params) => {
      this.ofertasService.getOfertaPorId(parametro.id).then((oferta) => {
        this.oferta = oferta;
      });
    });
  }

  public onDestroy(): void {

  }

}
