import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatMedico2PageRoutingModule } from './chat-medico2-routing.module';

import { ChatMedico2Page } from './chat-medico2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatMedico2PageRoutingModule,
    SharedModule
  ],
  declarations: [ChatMedico2Page]
})
export class ChatMedico2PageModule {}
