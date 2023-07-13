import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-tratamientos',
  templateUrl: './mis-tratamientos.page.html',
  styleUrls: ['./mis-tratamientos.page.scss'],
})
export class MisTratamientosPage implements OnInit {

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
