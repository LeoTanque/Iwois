import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesConPageRoutingModule } from './lista-pacientes-con-routing.module';

import { ListaPacientesConPage } from './lista-pacientes-con.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPacientesConPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaPacientesConPage]
})
export class ListaPacientesConPageModule {}
