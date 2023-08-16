import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPerdidosPageRoutingModule } from './registro-perdidos-routing.module';

import { RegistroPerdidosPage } from './registro-perdidos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPerdidosPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistroPerdidosPage]
})
export class RegistroPerdidosPageModule {}
