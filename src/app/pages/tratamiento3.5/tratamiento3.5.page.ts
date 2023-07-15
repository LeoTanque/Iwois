import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
      { tab: 'cart', route: '/tratamiento3' },
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
