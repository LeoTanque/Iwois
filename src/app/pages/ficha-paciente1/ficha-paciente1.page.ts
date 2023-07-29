import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-ficha-paciente1',
  templateUrl: './ficha-paciente1.page.html',
  styleUrls: ['./ficha-paciente1.page.scss'],
})
export class FichaPaciente1Page implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef| undefined;
  swiper?: Swiper
 
  images=[
  
    '../../../assets/barriga0.png',
    '../../../assets/barriga2.png',
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
      { tab: 'notification', styles: { color: 'blue', fontSize: '24px', marginTop: '-10px' } },
      { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-10px' } },
      { tab: 'profile', styles: { color: 'green', fontSize: '24px' } }
    ];
   
    tabRoutes = [
      { tab: 'cart', route: '/chat' },
      { tab: 'notification', route: '/login-prof' },
      { tab: 'mesage', route: '/busqueda-arr' },
      { tab: 'profile', route: '/suplementacion' }
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
