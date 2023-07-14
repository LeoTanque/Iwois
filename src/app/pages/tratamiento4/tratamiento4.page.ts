import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamiento4',
  templateUrl: './tratamiento4.page.html',
  styleUrls: ['./tratamiento4.page.scss'],
})
export class Tratamiento4Page implements OnInit {

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
