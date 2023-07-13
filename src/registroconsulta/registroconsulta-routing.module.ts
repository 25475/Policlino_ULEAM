import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroconsultaComponent } from './registroconsulta.component';

const routes: Routes = [{ path: '', component: RegistroconsultaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroconsultaRoutingModule { }
