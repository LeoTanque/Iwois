import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-servicios-adicionales-producto1',
  templateUrl: './servicios-adicionales-producto1.page.html',
  styleUrls: ['./servicios-adicionales-producto1.page.scss'],
})
export class ServiciosAdicionalesProducto1Page implements OnInit {
@ViewChild('swiper')
swiperRef: ElementRef| undefined;
swiper?: Swiper


images=[
  '../../../assets/nuevo.png',
  '../../../assets/nuevo.png',
  '../../../assets/nuevo.png'
  

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
