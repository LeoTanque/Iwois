import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-tratamiento3.5',
  templateUrl: './tratamiento3.5.page.html',
  styleUrls: ['./tratamiento3.5.page.scss'],
})
export class Tratamiento35Page implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef| undefined;
  swiper?: Swiper


  images=[
  
    '../../../assets/seleccion1.png',
    '../../../assets/pomada.png',
    '../../../assets/seleccion2.png',
    '../../../assets/barriga3.png', 
    '../../../assets/barriga2.png',
    
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
