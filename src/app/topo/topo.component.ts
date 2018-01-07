import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa): void {
      console.log(termoDaPesquisa); 
  }

}
