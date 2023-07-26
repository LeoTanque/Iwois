import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatMedicoPageRoutingModule } from './chat-medico-routing.module';

import { ChatMedicoPage } from './chat-medico.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatMedicoPageRoutingModule,
    SharedModule
  ],
  declarations: [ChatMedicoPage]
})
export class ChatMedicoPageModule {}
