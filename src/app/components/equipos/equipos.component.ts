import { Component, OnInit } from '@angular/core';
import { EquiposService} from '../../equipos.service';

@Component ({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: any[] = [];
  equipoArray: any[] = [];
  constructor(protected teamService: EquiposService) { }

  GuardarEquipoFav(idTeam) {
    this.equipos.forEach(e => {
      if (idTeam === e.idTeam) {
        this.equipoArray.push(e);
      }
    });
    this.equipoArray = this.equipoArray.filter
    ( (e, index, self) =>
        index === self.findIndex(t => t.idTeam === e.idTeam));
    localStorage.setItem('equipos' , JSON.stringify(this.equipoArray));
  }

  ngOnInit() {
    this.teamService.getEquipos()
      .subscribe(
        (datos) => {
          this.equipos = datos['teams'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
