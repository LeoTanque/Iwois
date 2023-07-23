import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergente-inicio-sesion',
  templateUrl: './emergente-inicio-sesion.page.html',
  styleUrls: ['./emergente-inicio-sesion.page.scss'],
})
export class EmergenteInicioSesionPage implements OnInit {
  textoDelParrafo: string = 'Inicia sesión o regístrate para acceder a todas las funcionalidades de la app';
  textoDelBoton: string = 'Continuar';
  textoAntesDeAcceder!: string;
  textoDespuesDeAcceder!: string;
  constructor() { }

  ngOnInit() {
    
  }



}
