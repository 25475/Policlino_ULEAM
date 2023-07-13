import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from 'src/navegacion/navegacion.component';
import { BuscarpacienteComponent } from 'src/buscarpaciente/buscarpaciente.component';
import { HistorialclinicoComponent } from 'src/historialclinico/historialclinico.component';
import { HospitalizacionComponent } from 'src/hospitalizacion/hospitalizacion.component';
import { InicioComponent } from 'src/inicio/inicio.component';
import { InicioSesionComponent } from 'src/inicio-sesion/inicio-sesion.component';
import { RegistroconsultaComponent } from 'src/registroconsulta/registroconsulta.component';

const routes: Routes = [
  { path:'', redirectTo:'inicio-sesion',pathMatch:'full'},
  { path: 'inicio', component:InicioComponent },
  { path: 'inicio-sesion', component:InicioSesionComponent},
  { path: 'historialclinico', component:HistorialclinicoComponent },
  { path: 'buscarpaciente', component:BuscarpacienteComponent },
  { path: 'registroconsulta', component:RegistroconsultaComponent},
  { path: 'hospitalizacion',component:HospitalizacionComponent },
  { path: 'navegacion',component:NavegacionComponent },

]
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
