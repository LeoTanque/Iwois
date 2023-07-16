import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-contrsena',
  templateUrl: './cambiar-contrsena.page.html',
  styleUrls: ['./cambiar-contrsena.page.scss'],
})
export class CambiarContrsenaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
