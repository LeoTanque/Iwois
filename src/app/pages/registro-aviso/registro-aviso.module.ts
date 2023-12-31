import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAvisoPageRoutingModule } from './registro-aviso-routing.module';

import { RegistroAvisoPage } from './registro-aviso.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAvisoPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistroAvisoPage]
})
export class RegistroAvisoPageModule {}
