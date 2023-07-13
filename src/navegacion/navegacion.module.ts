import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacionRoutingModule } from './navegacion-routing.module';
import { NavegacionComponent } from './navegacion.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    NavegacionRoutingModule

  ]
})
export class NavegacionModule { }
