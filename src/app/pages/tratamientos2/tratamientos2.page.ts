import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamientos2',
  templateUrl: './tratamientos2.page.html',
  styleUrls: ['./tratamientos2.page.scss'],
})
export class Tratamientos2Page implements OnInit {

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
