import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAvisoPageRoutingModule } from './registro-aviso-routing.module';

import { RegistroAvisoPage } from './registro-aviso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAvisoPageRoutingModule
  ],
  declarations: [RegistroAvisoPage]
})
export class RegistroAvisoPageModule {}
