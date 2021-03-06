import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router/src/events';

import { OfertasService } from "../ofertas.service";
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extensions';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        console.log('requisição http para api', termo);
        if (termo.trim() === '') {
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      })
      .catch((erro: any) => {
        console.log(erro);

        return Observable.of<Oferta[]>([]);
      });

  }

  public pesquisa(termoDaPesquisa): void {
    /* console.log(termoDaPesquisa); 

    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

    this.ofertas.subscribe((ofertas: Oferta[]) => {
         console.log(ofertas);
    }, (erro: any) => console.log('Erro status:',erro.status),
     () => console.log('Fluxo finalizado')
   );*/
    console.log('keyup caracter: ', termoDaPesquisa);
    this.subjectPesquisa.next(termoDaPesquisa);



  }

  public limpaPesquisa() {
    this.subjectPesquisa.next('');
  }

}
