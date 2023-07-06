import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-tratamientos2.5',
  templateUrl: './tratamientos2.5.page.html',
  styleUrls: ['./tratamientos2.5.page.scss'],
})
export class Tratamientos25Page implements OnInit {
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
