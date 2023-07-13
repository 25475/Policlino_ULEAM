import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalizacionComponent } from './hospitalizacion.component';

const routes: Routes = [{ path: '', component: HospitalizacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalizacionRoutingModule { }
