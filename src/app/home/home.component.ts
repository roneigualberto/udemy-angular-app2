import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: any;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertas = this.ofertasService.getOfertas();

    console.log(this.ofertas);
  }

}
