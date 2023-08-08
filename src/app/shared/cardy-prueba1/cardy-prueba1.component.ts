import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardy-prueba1',
  templateUrl: './cardy-prueba1.component.html',
  styleUrls: ['./cardy-prueba1.component.scss'],
})
export class CardyPrueba1Component  implements OnInit {
  @Input() text: string = '';
  @Input() textSize: string = '18px'; // Nueva propiedad para el tamaño del texto
  @Input() images: string[] = [];
  constructor() { }

  ngOnInit() {}

}
