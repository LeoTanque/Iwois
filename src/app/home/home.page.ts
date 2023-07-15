import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  tabs = [
    { tab: 'cart', icon: '../../../assets/carrito.svg' },
    { tab: 'notification', icon: '../../../assets/casa.svg' },
    { tab: 'mesage', icon: '../../../assets/msj.svg' },
    { tab: 'profile', icon: '../../../assets/person.svg' }
  ];

  iconStyles = [
    { tab: 'cart', styles: { color: 'red', fontSize: '24px' } },
    { tab: 'notification', styles: { color: 'blue', fontSize: '80px', marginTop: '-10px' } },
    { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-10px' } },
    { tab: 'profile', styles: { color: 'green', fontSize: '24px' } }
  ];

  tabRoutes = [
    { tab: 'cart', route: '/chat' },
    { tab: 'notification', route: '/login-prof' },
    { tab: 'mesage', route: '/busqueda-arr' },
    { tab: 'profile', route: '/suplementacion' }
  ];

  /*tabRoutes = [
    { icon: 'home', route: '/chat' },
    { icon: 'notifications', route: '/notifications' },
    { icon: 'mesage', route: '/notifications' },
    { icon: 'profile', route: '/notifications' },
  ];*/

  constructor(public router: Router) { }

  ngOnInit() {
  }
  
}
