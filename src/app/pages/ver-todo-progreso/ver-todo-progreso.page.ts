import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-todo-progreso',
  templateUrl: './ver-todo-progreso.page.html',
  styleUrls: ['./ver-todo-progreso.page.scss'],
})
export class VerTodoProgresoPage implements OnInit {


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
    { tab: 'profile', styles: { color: 'green', fontSize: '24px',  } }
  ];
 
  tabRoutes = [
    { tab: 'cart', route: '/tratamiento3' },
    { tab: 'notification', route: '/home' },
    { tab: 'mesage', route: '/' },
    { tab: 'profile', route: '/' }
  ];

  imageUrls: string[] = [
    '../../../assets/agregar.png',
    '../../../assets/bikini1.png',
    '../../../assets/espv.png',
    '../../../assets/espv1.png',
    '../../../assets/espv1.png',
    '../../../assets/espv1.png',
  ];
  constructor(public router: Router) { }


  ngOnInit() {
  }

}
