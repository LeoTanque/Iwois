import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() redirectRoute: string | undefined;

  constructor(private router: Router) { }

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
     
     onSlideClick(index: number) {
      if (index === 0 && this.redirectRoute) {
        this.router.navigate([this.redirectRoute]);
      }
    }

}
