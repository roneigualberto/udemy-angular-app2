import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router/src/events';

import {OfertasService} from "../ofertas.service";
import {Oferta}  from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa): void {
      console.log(termoDaPesquisa); 

     this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

     this.ofertas.subscribe((ofertas: Oferta[]) => {
          console.log(ofertas);
     });

     
          
  }

}
