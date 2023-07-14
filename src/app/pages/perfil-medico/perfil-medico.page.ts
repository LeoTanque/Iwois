import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-medico',
  templateUrl: './perfil-medico.page.html',
  styleUrls: ['./perfil-medico.page.scss'],
})
export class PerfilMedicoPage implements OnInit {

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
