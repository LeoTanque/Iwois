import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProtocoloCreadoAdminPageRoutingModule } from './ver-protocolo-creado-admin-routing.module';

import { VerProtocoloCreadoAdminPage } from './ver-protocolo-creado-admin.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProtocoloCreadoAdminPageRoutingModule,
    SharedModule
  ],
  declarations: [VerProtocoloCreadoAdminPage]
})
export class VerProtocoloCreadoAdminPageModule {}
