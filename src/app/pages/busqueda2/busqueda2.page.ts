import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda2',
  templateUrl: './busqueda2.page.html',
  styleUrls: ['./busqueda2.page.scss'],
})
export class Busqueda2Page implements OnInit {
  showItem = false;
  constructor(private ruta: Router) { }

  ngOnInit() {
  }
  toggleItem() {
    this.showItem=true;
    this.showItem = !this.showItem;
    this.ruta.navigate(['/login'])
  }
}
