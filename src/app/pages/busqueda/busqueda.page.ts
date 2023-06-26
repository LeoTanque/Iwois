import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
@ViewChild('swiper')
swiperRef: ElementRef| undefined;
swiper? : Swiper;

images=[
  
'../../../assets/barriga.png',
'../../../assets/maposo.png',
'../../../assets/maposo.png',
'../../../assets/maposo.png',
'../../../assets/maposo.png',
'../../../assets/maposo.png',
'../../../assets/maposo.png'
]

  constructor() { }

  ngOnInit() {
  }
swiperReady(){
  this.swiper = this.swiperRef?.nativeElement.swiper;
}
goNext(){
  this.swiper?.slideNext()
}
goPrev(){
  this.swiper?.slidePrev();
}

  swiperSlideChanged(e:any){
    console.log('changed: ',e)
     }
}
