import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iconos',
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.scss'],
})
export class IconosComponent  implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

}
