import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardona',
  templateUrl: './cardona.component.html',
  styleUrls: ['./cardona.component.scss'],
})
export class CardonaComponent  implements OnInit {
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  imageUrl!: any;
  @Input()
  imageAlt!: string;
  constructor() { }

  ngOnInit() {}

}
