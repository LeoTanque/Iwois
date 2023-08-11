import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfil4PageRoutingModule } from './editar-perfil4-routing.module';

import { EditarPerfil4Page } from './editar-perfil4.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfil4PageRoutingModule,
    SharedModule
  ],
  declarations: [EditarPerfil4Page]
})
export class EditarPerfil4PageModule {}
