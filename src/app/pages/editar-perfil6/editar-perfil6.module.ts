import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfil6PageRoutingModule } from './editar-perfil6-routing.module';

import { EditarPerfil6Page } from './editar-perfil6.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfil6PageRoutingModule,
    SharedModule
  ],
  declarations: [EditarPerfil6Page]
})
export class EditarPerfil6PageModule {}
