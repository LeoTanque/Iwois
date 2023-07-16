import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  
    '../../../assets/a.png',
    '../../../assets/1.png',
    '../../../assets/barriga3.png', 
    '../../../assets/a.png',
    '../../../assets/1.png',
    '../../../assets/barriga3.png'
    ]
    


    tabs = [
      { tab: 'cart', icon: '../../../assets/carrito.svg' },
      { tab: 'notification', icon: '../../../assets/home.svg' },
      { tab: 'mesage', icon: '../../../assets/msj.svg' },
      { tab: 'profile', icon: '../../../assets/person.svg' }
    ];
    iconStyles = [ 
      { tab: 'cart', styles: { color: 'red', fontSize: '24px' } },
      { tab: 'notification', styles: { color: 'blue', fontSize: '24px', marginTop: '-15px' } },
      { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-15px' } },
      { tab: 'profile', styles: { color: 'green', fontSize: '24px' } }
    ];
   
    tabRoutes = [
      { tab: 'cart', route: '/home' },
      { tab: 'notification', route: '/home' },
      { tab: 'mesage', route: '/' },
      { tab: 'profile', route: '/perfil' }
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
