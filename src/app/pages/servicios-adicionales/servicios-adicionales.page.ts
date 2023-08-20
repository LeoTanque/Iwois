import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios-adicionales',
  templateUrl: './servicios-adicionales.page.html',
  styleUrls: ['./servicios-adicionales.page.scss'],
})
export class ServiciosAdicionalesPage implements OnInit {



  imageUrls: string[] = [
    '../../../assets/seleccion1.png',
    '../../../assets/pom.png',
    '../../../assets/seleccion2.png',
    "../../../assets/seleccion3.png",
     '../../../assets/selecccion4.png',
     '../../../assets/cuello.png',
  ];

  tabs = [
    { tab: 'cart', icon: '../../../assets/car.svg' },
    { tab: 'notification', icon: '../../../assets/home.svg' },
    { tab: 'mesage', icon: '../../../assets/msj.svg' },
    { tab: 'profile', icon: '../../../assets/person.svg' }
  ];
  
  iconStyles = [ 
    { tab: 'cart', styles: { color: 'red', fontSize: '70px', marginTop: '-15px' } },
    { tab: 'notification', styles: { color: 'blue', fontSize: '24px', marginTop: '-5px' } },
    { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-5px' } },
    { tab: 'profile', styles: { color: 'green', fontSize: '24px' } }
  ];
  
  tabRoutes = [
    { tab: 'cart', route: '/tratamiento3' },
    { tab: 'notification', route: '/home' },
    { tab: 'mesage', route: '/' },
    { tab: 'profile', route: '/perfil' }
  ];


  imageRoutes: string[][] = [
    ['/home'], // Rutas para las imágenes de la primera fila
    ['/ruta-imagen4', '/ruta-imagen5', '/ruta-imagen6'], // Rutas para las imágenes de la segunda fila
    // ... otras filas de rutas
  ];
  constructor(public router: Router) { }

  ngOnInit() { 
  }

}
