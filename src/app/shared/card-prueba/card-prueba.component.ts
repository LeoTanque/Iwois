import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prueba',
  templateUrl: './card-prueba.component.html',
  styleUrls: ['./card-prueba.component.scss'],
})
export class CardPruebaComponent  implements OnInit {
  @Input() text: string = '';
  @Input() images: string[] = [];
  constructor() { }

  ngOnInit() {} 

}
