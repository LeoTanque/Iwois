import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamiento-ejercicio',
  templateUrl: './tratamiento-ejercicio.page.html',
  styleUrls: ['./tratamiento-ejercicio.page.scss'],
})
export class TratamientoEjercicioPage implements OnInit {

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
