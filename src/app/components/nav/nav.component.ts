import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  titulo = 'Proyecto Angular Final Dessarollo Web 2';
  constructor() { }

  ngOnInit() {
  }

}

