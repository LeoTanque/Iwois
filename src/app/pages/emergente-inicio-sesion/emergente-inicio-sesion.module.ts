import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergenteInicioSesionPageRoutingModule } from './emergente-inicio-sesion-routing.module';

import { EmergenteInicioSesionPage } from './emergente-inicio-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergenteInicioSesionPageRoutingModule
  ],
  declarations: [EmergenteInicioSesionPage]
})
export class EmergenteInicioSesionPageModule {}
