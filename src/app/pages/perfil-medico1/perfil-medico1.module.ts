import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMedico1PageRoutingModule } from './perfil-medico1-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PerfilMedico1Page } from './perfil-medico1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMedico1PageRoutingModule,
    SharedModule
  ],
  declarations: [PerfilMedico1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PerfilMedico1PageModule {}
