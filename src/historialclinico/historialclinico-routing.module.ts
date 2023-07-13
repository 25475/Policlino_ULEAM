import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialclinicoComponent } from './historialclinico.component';

const routes: Routes = [{ path: '', component: HistorialclinicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialclinicoRoutingModule { }
