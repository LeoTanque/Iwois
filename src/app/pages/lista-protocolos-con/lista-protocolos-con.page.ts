import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-protocolos-con',
  templateUrl: './lista-protocolos-con.page.html',
  styleUrls: ['./lista-protocolos-con.page.scss'],
})
export class ListaProtocolosConPage implements OnInit {

  tabs = [
    { tab: 'cart', icon: '../../../assets/carrito.svg' },
    { tab: 'notification', icon: '../../../assets/home.svg' },
    { tab: 'mesage', icon: '../../../assets/msj.svg' },
    { tab: 'profile', icon: '../../../assets/person.svg' }
  ];

  iconStyles = [ 
    { tab: 'cart', styles: { color: 'red', fontSize: '24px' } },
    { tab: 'notification', styles: { color: 'blue', fontSize: '24px', marginTop: '-15px' } },
    { tab: 'mesage', styles: { color: 'blue', fontSize: '24px',  marginTop: '-15px' } },
    { tab: 'profile', styles: { color: 'green', fontSize: '24px' } }
  ];
 
  tabRoutes = [
    { tab: 'cart', route: '/tratamiento3' },
    { tab: 'notification', route: '/home' },
    { tab: 'mesage', route: '/' },
    { tab: 'profile', route: '/perfil' }
  ];
  
  imageUrls: string[] = [
    '../../../assets/l1.png',
    '../../../assets/l2.png',
    '../../../assets/l1.png',
    '../../../assets/l2.png',
    '../../../assets/l1.png',
    '../../../assets/l2.png',
    
  ];


  iconNames: string[][] = [
   
    ['close-outline', 'camera'],   
    ['close-outline', 'camera'],
  
  ];



  constructor(public router: Router) { }

  ngOnInit() {
  }


  onIconClick(iconName: string) {
    if (iconName === 'camera') {
      // Realiza la navegación a la página deseada cuando se hace clic en el icono "heart"
      // Reemplaza '/otra-pagina' por la ruta de la página a la que deseas redirigir
       this.router.navigate(['/home']);
      console.log('Redirigiendo a otra página...');
    }
  }

}
