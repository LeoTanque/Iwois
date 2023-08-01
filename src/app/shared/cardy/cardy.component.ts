import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardy',
  templateUrl: './cardy.component.html',
  styleUrls: ['./cardy.component.scss'],
})
export class CardyComponent  implements OnInit {
  @Input() cardText: string = '';
  @Input() cardButtonContent: string = '';
  constructor() { }

  ngOnInit() {}

}
