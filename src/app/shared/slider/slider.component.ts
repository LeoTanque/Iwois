import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef| undefined;
  swiper?: Swiper 

  @Input() images:string[] = [];
  @Input() slidesPerView=''
  @Input() elementSize = ''; 
  constructor() { }

  ngOnInit() {} 

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
