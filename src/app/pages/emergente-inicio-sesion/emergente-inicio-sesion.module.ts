import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergenteInicioSesionPageRoutingModule } from './emergente-inicio-sesion-routing.module';

import { EmergenteInicioSesionPage } from './emergente-inicio-sesion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergenteInicioSesionPageRoutingModule,
    SharedModule
  ],
  declarations: [EmergenteInicioSesionPage]
})
export class EmergenteInicioSesionPageModule {}
