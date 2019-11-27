import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../equipos.service';
import { ActivatedRoute} from '@angular/router';

@Component ({
  selector: 'app-perfil-equipo',
  templateUrl: './perfil-equipo.component.html',
  styleUrls: ['./perfil-equipo.component.css']
})
export class PerfilEquipoComponent implements OnInit {
  jugadores: any[] = [];
  equipos: any[] = [];
  eventos: any[] = [];
  ultieventos: any[] = [];

  constructor(
    private equipoService: EquiposService,
    private route: ActivatedRoute
    ) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.equipoService.getEquiposId(params.id)
        .subscribe(
          (datos) => {
            this.equipos = datos['teams'];
          },
          (error) => {
            console.error(error);
          }
        );
        this.equipoService.getJugadorEquipoId(params.id)
        .subscribe(
          (datos) => {
            this.jugadores = datos['player'];
          },
          (error) => {
            console.error(error);
          }
        );
        this.equipoService.getUltiEventoEquipoId(params.id).subscribe(
          (datos) => {
            this.ultieventos = datos['results'];
          },
          (error) => {
            console.log(error);
          }
        );
        this.equipoService.getSigEventoEquipoId(params.id).subscribe(
          (datos) => {
            this.eventos = datos['events'];
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }
}
