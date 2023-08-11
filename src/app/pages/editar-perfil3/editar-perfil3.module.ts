import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfil3PageRoutingModule } from './editar-perfil3-routing.module';

import { EditarPerfil3Page } from './editar-perfil3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfil3PageRoutingModule,
    SharedModule
  ],
  declarations: [EditarPerfil3Page]
})
export class EditarPerfil3PageModule {}
