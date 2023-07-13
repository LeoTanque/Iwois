import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTabBarComponent } from './custom-tab-bar/custom-tab-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ CustomTabBarComponent,],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CustomTabBarComponent]
})
export class SharedModule { }
