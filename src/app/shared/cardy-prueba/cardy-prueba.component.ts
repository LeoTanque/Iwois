import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardy-prueba',
  templateUrl: './cardy-prueba.component.html',
  styleUrls: ['./cardy-prueba.component.scss'],
})
export class CardyPruebaComponent  implements OnInit {
  @Input() cardText: string = '';
  @Input() cardButtonContent: string = '';
  @Input() subHeading: string = '';
  constructor() { }

  ngOnInit() {}

}
