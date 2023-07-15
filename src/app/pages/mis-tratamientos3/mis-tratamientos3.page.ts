import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-tratamientos3',
  templateUrl: './mis-tratamientos3.page.html',
  styleUrls: ['./mis-tratamientos3.page.scss'],
})
export class MisTratamientos3Page implements OnInit {


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
    { tab: 'cart', route: '/busqueda-arr' },
    { tab: 'notification', route: '/home' },
    { tab: 'mesage', route: '/' },
    { tab: 'profile', route: '/perfil' }
  ];
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
