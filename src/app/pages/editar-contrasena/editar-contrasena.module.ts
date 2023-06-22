import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarContrasenaPageRoutingModule } from './editar-contrasena-routing.module';

import { EditarContrasenaPage } from './editar-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarContrasenaPageRoutingModule
  ],
  declarations: [EditarContrasenaPage]
})
export class EditarContrasenaPageModule {}
