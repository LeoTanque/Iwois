import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-busqueda-arr',
  templateUrl: './busqueda-arr.page.html',
  styleUrls: ['./busqueda-arr.page.scss'],
})
export class BusquedaArrPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef| undefined;
  swiper?: Swiper 
  @ViewChild('tabs')
  tabs!: IonTabs;

  images=[
  
    '../../../assets/barriga0.png',
    '../../../assets/barriga2.png',
    '../../../assets/barriga3.png', 
    '../../../assets/barriga0.png',
    '../../../assets/barriga2.png',
    '../../../assets/barriga3.png'
    ]
    
  constructor() { }

  ngOnInit() {
  }

  swiperReady(){
    this.swiper= this.swiperRef?.nativeElement.swiper
  }


  
  goNext(){
    this.swiper?.slideNext();
  }

  swiperSlideChanged(e:any){
    console.log('changed: ',e)
     }

}


