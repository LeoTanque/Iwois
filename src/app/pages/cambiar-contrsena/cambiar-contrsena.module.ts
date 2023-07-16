import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarContrsenaPageRoutingModule } from './cambiar-contrsena-routing.module';

import { CambiarContrsenaPage } from './cambiar-contrsena.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarContrsenaPageRoutingModule,
    SharedModule
  ],
  declarations: [CambiarContrsenaPage]
})
export class CambiarContrsenaPageModule {}
