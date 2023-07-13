import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarpacienteComponent } from './buscarpaciente.component';

const routes: Routes = [{ path: '', component: BuscarpacienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarpacienteRoutingModule { }
