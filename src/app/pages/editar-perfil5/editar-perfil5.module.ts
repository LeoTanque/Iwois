import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfil5PageRoutingModule } from './editar-perfil5-routing.module';

import { EditarPerfil5Page } from './editar-perfil5.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfil5PageRoutingModule,
    SharedModule
  ],
  declarations: [EditarPerfil5Page]
})
export class EditarPerfil5PageModule {}
