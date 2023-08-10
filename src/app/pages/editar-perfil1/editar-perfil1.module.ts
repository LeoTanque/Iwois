import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfil1PageRoutingModule } from './editar-perfil1-routing.module';

import { EditarPerfil1Page } from './editar-perfil1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfil1PageRoutingModule,
    SharedModule
  ],
  declarations: [EditarPerfil1Page]
})
export class EditarPerfil1PageModule {}
