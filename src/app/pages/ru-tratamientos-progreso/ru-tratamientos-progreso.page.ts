import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ru-tratamientos-progreso',
  templateUrl: './ru-tratamientos-progreso.page.html',
  styleUrls: ['./ru-tratamientos-progreso.page.scss'],
})
export class RuTratamientosProgresoPage implements OnInit {


  tabs = [
    { tab: 'cart', icon: '../../../assets/carrito.svg' },
    { tab: 'notification', icon: '../../../assets/home.svg' },
    { tab: 'mesage', icon: '../../../assets/msj.svg' },
    { tab: 'profile', icon: '../../../assets/person.svg' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
