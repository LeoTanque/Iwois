import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfil2PageRoutingModule } from './editar-perfil2-routing.module';

import { EditarPerfil2Page } from './editar-perfil2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfil2PageRoutingModule,
    SharedModule
  ],
  declarations: [EditarPerfil2Page]
})
export class EditarPerfil2PageModule {}
