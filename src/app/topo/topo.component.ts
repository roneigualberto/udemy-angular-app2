import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router/src/events';

import {OfertasService} from "../ofertas.service";

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa): void {
      console.log(termoDaPesquisa); 

  }

}
