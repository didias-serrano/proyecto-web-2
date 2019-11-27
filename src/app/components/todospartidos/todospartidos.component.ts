import { Component, OnInit, Input } from '@angular/core';
import { EquiposService } from '../../equipos.service';
@Component({
  selector: 'app-todospartidos',
  templateUrl: './todospartidos.component.html',
  styleUrls: ['./todospartidos.component.css']
})
export class TodospartidosComponent implements OnInit {
  @Input() equipoID: string;
  partidos: any[] = [];
  partidosEquipo: any[] = [];
  fechahoy = this.fecha();
  constructor( private equipoService: EquiposService) { }

  ngOnInit() {

    this.equipoService.getPartidosTemp().subscribe(
      (data) => {
        // tslint:disable-next-line: no-string-literal
        this.partidos = data['events'];
        this.partidos.forEach(ev => {
          if (ev.idHomeTeam === this.equipoID || ev.idAwayTeam === this.equipoID) {
            this.partidosEquipo.push(ev);
          }
       });
      }
    );
    console.log(this.partidosEquipo);
  }

  fecha() {
    const hoy = new Date();
    const dd = hoy.getDate();
    const mm = hoy.getMonth() + 1;
    const yyyy = hoy.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

  }


