import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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


  images=[
  
    '../../../assets/barriga0.png',
    '../../../assets/barriga2.png',
    '../../../assets/barriga3.png', 
    '../../../assets/barriga0.png',
    '../../../assets/barriga2.png',
    '../../../assets/barriga3.png'
    ]


    tabs = [
      { tab: 'cart', icon: '../../../assets/carrito.svg' },
      { tab: 'notification', icon: '../../../assets/home.svg' },
      { tab: 'mesage', icon: '../../../assets/msj.svg' },
      { tab: 'profile', icon: '../../../assets/person.svg' }
    ];
    
  constructor() { }

  ngOnInit() {
  }

 

}


