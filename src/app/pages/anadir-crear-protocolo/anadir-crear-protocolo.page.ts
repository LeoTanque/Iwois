import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-crear-protocolo',
  templateUrl: './anadir-crear-protocolo.page.html',
  styleUrls: ['./anadir-crear-protocolo.page.scss'],
})
export class AnadirCrearProtocoloPage implements OnInit {

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
  
  imageUrls: string[] = [
    '../../../assets/l1.png',
    '../../../assets/b2.png',
    '../../../assets/l2.png',
    '../../../assets/l1.png',
    '../../../assets/l2.png',
    '../../../assets/l1.png',
    '../../../assets/l2.png',
    '../../../assets/l1.png',
    '../../../assets/b2.png',
    '../../../assets/l2.png',
    '../../../assets/l1.png',
    '../../../assets/l2.png',
    '../../../assets/l1.png',
    '../../../assets/l2.png',
    
  ];


  iconNames: string[][] = [
   
    ['close-outline', 'camera'],   
    ['close-outline', 'camera'],
  
  ];



  constructor(public router: Router) { }

  ngOnInit() {
  }

}
