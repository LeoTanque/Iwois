import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-protocolo-final-suplementacion',
  templateUrl: './nuevo-protocolo-final-suplementacion.page.html',
  styleUrls: ['./nuevo-protocolo-final-suplementacion.page.scss'],
})
export class NuevoProtocoloFinalSuplementacionPage implements OnInit {

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

}
