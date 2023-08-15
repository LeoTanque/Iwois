import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscripcionesPageRoutingModule } from './suscripciones-routing.module';

import { SuscripcionesPage } from './suscripciones.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuscripcionesPageRoutingModule,
    SharedModule
  ],
  declarations: [SuscripcionesPage]
})
export class SuscripcionesPageModule {}
