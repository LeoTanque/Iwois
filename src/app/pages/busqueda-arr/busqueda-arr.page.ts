import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LatLngBounds, LatLngBoundsExpression, LatLngBoundsLiteral, LatLngExpression, Map, Marker, marker, tileLayer } from 'leaflet';

import Swiper from 'swiper';

@Component({
  selector: 'app-busqueda-arr',
  templateUrl: './busqueda-arr.page.html',
  styleUrls: ['./busqueda-arr.page.scss'],
})
export class BusquedaArrPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef| undefined;
  swiper?: Swiper 
  @ViewChild('mapContainer', { static: true })
  mapContainer!: ElementRef;
  
  images=[
  
    '../../../assets/barriga0.png',
    '../../../assets/barriga2.png',
    '../../../assets/barriga3.png', 
    '../../../assets/barriga0.png',
    '../../../assets/barriga2.png',
    '../../../assets/barriga3.png'
    ]

 
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
  


  map.fitBounds([
  [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
  ] );
  
  markerItem.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


  /*const markers: LatLngExpression[] = [
    [40.4219, -3.7032], // Coordenadas del primer marcador
    [40.4225, -3.7035], // Coordenadas del segundo marcador
    // Agregar más coordenadas aquí...
  ];

  markers.forEach(coord => {
    const markerItem = new Marker(coord).addTo(map);
    markerItem.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  });

  // Ajustar el mapa para que todos los marcadores sean visibles
  map.fitBounds(markers as LatLngBoundsLiteral);*/
}



  
  
  

}


