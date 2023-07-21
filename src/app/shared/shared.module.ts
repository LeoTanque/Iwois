import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTabBarComponent } from './custom-tab-bar/custom-tab-bar.component';
import { IonicModule } from '@ionic/angular';
import { SliderComponent } from './slider/slider.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SuperiorComponent } from './superior/superior.component';
import { ButtonComponent } from './button/button.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { MapasComponent } from './mapas/mapas.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [ CustomTabBarComponent, SliderComponent, SuperiorComponent, ButtonComponent, 
    ImageGridComponent, MapasComponent, ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CustomTabBarComponent,
  SliderComponent, SuperiorComponent, ButtonComponent, ImageGridComponent,MapasComponent, ModalComponent]
})
export class SharedModule { }
