import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.page.html',
  styleUrls: ['./suscripciones.page.scss'],
})
export class SuscripcionesPage implements OnInit {
  
    tabs = [
      { tab: 'cart', icon: '../../../assets/carrito.svg' },
      { tab: 'notification', icon: '../../../assets/home.svg' },
      { tab: 'mesage', icon: '../../../assets/msj.svg' },
      { tab: 'profile', icon: '../../../assets/man.svg' }
    ];
  
  
    iconStyles = [ 
      { tab: 'cart', styles: { color: 'red', fontSize: '24px' } },
      { tab: 'notification', styles: { color: 'blue', fontSize: '24px', marginTop: '-5px' } },
      { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-5px' } },
      { tab: 'profile', styles: { color: 'green', fontSize: '24px',} }
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

}
