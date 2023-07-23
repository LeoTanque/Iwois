import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-busqueda3', 
  templateUrl: './busqueda3.page.html',
  styleUrls: ['./busqueda3.page.scss'],
})
export class Busqueda3Page implements OnInit {


  
  tabs = [
    { tab: 'cart', icon: '../../../assets/carrito.svg', route: '/home' },
    { tab: 'notification', icon: '../../../assets/home.svg', route: '/' },
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

  

  constructor(public router: Router) { }

  ngOnInit() {
  }

ngAfterViewInit():void{

  const map= new Map('map').setView([40.4219,-3.7032], 13);

tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



const markerItem =  marker([40.4219,-3.7032]).addTo(map);
//const markerItem2 = marker([40.3889942,-3.5984305]).addTo(map);

map.fitBounds([
[markerItem.getLatLng().lat, markerItem.getLatLng().lng],
//[markerItem2.getLatLng().lat, markerItem2.getLatLng().lng]

] );


markerItem.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


}

}
