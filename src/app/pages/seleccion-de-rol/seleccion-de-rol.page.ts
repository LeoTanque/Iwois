import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-de-rol',
  templateUrl: './seleccion-de-rol.page.html',
  styleUrls: ['./seleccion-de-rol.page.scss'],
})
export class SeleccionDeRolPage implements OnInit {

  backgroundColor = '#FFFFFF'; // Color de fondo inicial
  redirectRoute = '';
  constructor(private router: Router) {}

  ngOnInit() { 
  }

  cambiarColorYRedirigir(color: string, ruta: string) {
    this.backgroundColor = color; // Cambiar el color
    this.redirectRoute = ruta; // Establecer la ruta de redirección
  }

  // Función para realizar la redirección
  redirigir() {
    if (this.redirectRoute) {
      this.router.navigate([this.redirectRoute]);
    }
  }
}
