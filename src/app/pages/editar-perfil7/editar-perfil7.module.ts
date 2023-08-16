import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfil7PageRoutingModule } from './editar-perfil7-routing.module';

import { EditarPerfil7Page } from './editar-perfil7.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfil7PageRoutingModule,
    SharedModule
  ],
  declarations: [EditarPerfil7Page]
})
export class EditarPerfil7PageModule {}
