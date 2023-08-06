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
import { IconosComponent } from './iconos/iconos.component';
import { TextoComponent } from './texto/texto.component';
import { FotosComponent } from './fotos/fotos.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { CardyComponent } from './cardy/cardy.component';
import { CardonaComponent } from './cardona/cardona.component';
import { Iconos2Component } from './iconos2/iconos2.component';
import { ArribaComponent } from './arriba/arriba.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ImageGrid1Component } from './image-grid1/image-grid1.component';
import { RouterModule } from '@angular/router';
import { NuevaCardComponent } from './nueva-card/nueva-card.component';
import { ImageGrid2Component } from './image-grid2/image-grid2.component';
import { Boton2Component } from './boton2/boton2.component';




@NgModule({
  declarations: [ CustomTabBarComponent, SliderComponent, SuperiorComponent, ButtonComponent, 
    ImageGridComponent, MapasComponent, ModalComponent, IconosComponent, TextoComponent, FotosComponent, 
    SmallCardComponent, CardyComponent, CardonaComponent, Iconos2Component, ArribaComponent, SearchBarComponent,
  ImageGrid1Component, NuevaCardComponent, ImageGrid2Component, Boton2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [CustomTabBarComponent,
  SliderComponent, SuperiorComponent, ButtonComponent, ImageGridComponent,MapasComponent, ModalComponent,
IconosComponent, TextoComponent, FotosComponent, SmallCardComponent, CardyComponent, CardonaComponent,
Iconos2Component, ArribaComponent, SearchBarComponent, ImageGrid1Component, NuevaCardComponent, ImageGrid2Component,
Boton2Component]
})
export class SharedModule { }
