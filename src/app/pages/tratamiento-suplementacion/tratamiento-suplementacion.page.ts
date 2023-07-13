import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamiento-suplementacion',
  templateUrl: './tratamiento-suplementacion.page.html',
  styleUrls: ['./tratamiento-suplementacion.page.scss'],
})
export class TratamientoSuplementacionPage implements OnInit {

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
