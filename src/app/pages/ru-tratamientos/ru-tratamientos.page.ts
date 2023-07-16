import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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


    tabs = [
      { tab: 'cart', icon: '../../../assets/carrito.svg' },
      { tab: 'notification', icon: '../../../assets/home.svg' },
      { tab: 'mesage', icon: '../../../assets/msj.svg' },
      { tab: 'profile', icon: '../../../assets/person.svg' }
    ];

    iconStyles = [ 
      { tab: 'cart', styles: { color: 'red', fontSize: '24px' } },
      { tab: 'notification', styles: { color: 'blue', fontSize: '24px', marginTop: '-5px' } },
      { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-5px' } },
      { tab: 'profile', styles: { color: 'green', fontSize: '24px', marginTop:'-20px' } }
    ];
   
    tabRoutes = [
      { tab: 'cart', route: '/tratamiento3' },
      { tab: 'notification', route: '/home' },
      { tab: 'mesage', route: '/' },
      { tab: 'profile', route: '/' }
    ];
    
  
    constructor(public router: Router) { }



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
