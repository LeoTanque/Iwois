import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergente-eliminar',
  templateUrl: './emergente-eliminar.page.html',
  styleUrls: ['./emergente-eliminar.page.scss'],
})
export class EmergenteEliminarPage implements OnInit {
  textoDelParrafo: string = 'Inicia sesión o regístrate para acceder <br> a todas las funcionalidades de la app';
  textoDelBoton: string = 'Continuar';
  constructor() { }

  ngOnInit() {
  }
 
}
