import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../equipos.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  partidos: any[] = [];
  constructor(
    private equipoervice: EquiposService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ruta.params.subscribe(
      (params) => {
        this.equipoervice.getPartidoId(params.id).subscribe(
          (datos) => {
            this.partidos = datos['events'];
          }
        );
      }
    );

  }

}
