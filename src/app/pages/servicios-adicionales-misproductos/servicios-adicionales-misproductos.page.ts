import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios-adicionales-misproductos',
  templateUrl: './servicios-adicionales-misproductos.page.html',
  styleUrls: ['./servicios-adicionales-misproductos.page.scss'],
})
export class ServiciosAdicionalesMisproductosPage implements OnInit {

 
  imageUrls: string[] = [
    '../../../assets/fruta.png',
    '../../../assets/pom.png',
     '../../../assets/cuello.png',
     '../../../assets/cejas.png'
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



  constructor(public router: Router) { }

  ngOnInit() {
  }

}
 