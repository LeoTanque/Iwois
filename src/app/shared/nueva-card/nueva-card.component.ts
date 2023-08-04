import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-card',
  templateUrl: './nueva-card.component.html',
  styleUrls: ['./nueva-card.component.scss'],
})
export class NuevaCardComponent  implements OnInit {
  @Input() cardText: string = '';
  @Input() cardButtonContent: string = '';
  
  constructor() { }

  ngOnInit() {}

}
