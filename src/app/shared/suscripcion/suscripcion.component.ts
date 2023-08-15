import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss'],
})
export class SuscripcionComponent  implements OnInit {
  @Input() backgroundColor: string = '#ffffff'; // Color de fondo de la card
  @Input() title: string = ''; // Título del Card
  @Input() titleColor: string = '#666666';
  @Input() buttonText: string = ''; // Texto del botón
  @Input() buttonBackgroundColor: string = '#83989A'; // Color de fondo del botón
  @Input() paragraphText: string = ''; // Texto del párrafo
  @Input() paragraphColor: string = '#666666';
  @Input() priceText: string = ''; 
  @Input() additionalText: string = '';
  @Input() buttonTextColor: string = 'white';
  constructor() { }

  ngOnInit() {}

}
