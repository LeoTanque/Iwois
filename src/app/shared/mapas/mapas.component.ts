import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss'],
})
export class MapasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

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
  
  
  }

}
