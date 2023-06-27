import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMedicoPageRoutingModule } from './perfil-medico-routing.module';

import { PerfilMedicoPage } from './perfil-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMedicoPageRoutingModule
  ],
  declarations: [PerfilMedicoPage]
})
export class PerfilMedicoPageModule {}
