import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesProfesionalesPageRoutingModule } from './notificaciones-profesionales-routing.module';

import { NotificacionesProfesionalesPage } from './notificaciones-profesionales.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesProfesionalesPageRoutingModule,
    SharedModule
  ],
  declarations: [NotificacionesProfesionalesPage]
})
export class NotificacionesProfesionalesPageModule {}
