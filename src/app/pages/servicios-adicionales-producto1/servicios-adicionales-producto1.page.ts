import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

tabs = [
  { tab: 'cart', icon: '../../../assets/car.svg' },
  { tab: 'notification', icon: '../../../assets/home.svg' },
  { tab: 'mesage', icon: '../../../assets/msj.svg' },
  { tab: 'profile', icon: '../../../assets/person.svg' }
];

iconStyles = [ 
  { tab: 'cart', styles: { color: 'red', fontSize: '70px', marginTop: '-15px' } },
  { tab: 'notification', styles: { color: 'blue', fontSize: '24px', marginTop: '-5px' } },
  { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-5px' } },
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
