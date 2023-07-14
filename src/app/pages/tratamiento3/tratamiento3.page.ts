import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamiento3',
  templateUrl: './tratamiento3.page.html',
  styleUrls: ['./tratamiento3.page.scss'],
})
export class Tratamiento3Page implements OnInit {

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
