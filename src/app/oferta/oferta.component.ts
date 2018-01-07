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
      
    }

    public onDestroy(): void {
      
    }
  
}
