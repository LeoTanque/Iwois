import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-ru-tratamientos',
  templateUrl: './ru-tratamientos.page.html',
  styleUrls: ['./ru-tratamientos.page.scss'],
})
export class RuTratamientosPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef| undefined;
  swiper?: Swiper

  images=[
  
    '../../../assets/9510.png',
    '../../../assets/9510.png',
    '../../../assets/9510.png',
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
