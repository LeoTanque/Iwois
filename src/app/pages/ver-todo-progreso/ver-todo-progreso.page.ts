import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
