import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.scss'],
})
export class ProtocoloComponent  implements OnInit {
  @Input() cardText: string = '';
  @Input() cardButtonContent: string = '';
  @Input() subHeading: string = '';
  @Input() redText: string = '';
  @Input() smallButtonContent: string = '';
  constructor() { }

  ngOnInit() {}

}
