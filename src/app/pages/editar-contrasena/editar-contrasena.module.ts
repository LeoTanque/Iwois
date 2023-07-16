import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarContrasenaPageRoutingModule } from './editar-contrasena-routing.module';

import { EditarContrasenaPage } from './editar-contrasena.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarContrasenaPageRoutingModule,
    SharedModule
  ],
  declarations: [EditarContrasenaPage]
})
export class EditarContrasenaPageModule {}
