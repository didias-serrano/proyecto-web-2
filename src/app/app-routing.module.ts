import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilEquipoComponent } from './components/perfil-equipo/perfil-equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { PartidoComponent } from './components/partido/partido.component';

const routes: Routes = [
  { path: '' , component : InicioComponent },
  { path: 'equipo/:id' , component : PerfilEquipoComponent },
  { path: 'jugador/:id' , component : JugadorComponent },
  { path: 'partido/:id' , component : PartidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
