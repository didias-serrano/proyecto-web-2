import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos-favo',
  templateUrl: './equipos-favo.component.html',
  styleUrls: ['./equipos-favo.component.css']
})
export class EquiposFavoComponent implements OnInit {
  equipos = this.ObtenerFavEquipos();


  constructor() {}

  ObtenerFavEquipos() {
    if (JSON.parse( localStorage.getItem('equipos')) != null) {
      return JSON.parse( localStorage.getItem('equipos'));
    } else {
      return '';
    }
  }

  ngOnInit() {
    this.ObtenerFavEquipos();
  }

}
