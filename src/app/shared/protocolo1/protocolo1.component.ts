import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-protocolo1',
  templateUrl: './protocolo1.component.html',
  styleUrls: ['./protocolo1.component.scss'],
})
export class Protocolo1Component  implements OnInit {
  @Input() cardText: string = '';
  @Input() cardButtonContent: string = '';
  @Input() subHeading: string = '';
  @Input() redText: string = '';

  constructor() { }

  ngOnInit() {}

}
