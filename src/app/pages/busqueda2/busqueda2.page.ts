import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda2',
  templateUrl: './busqueda2.page.html',
  styleUrls: ['./busqueda2.page.scss'],
})
export class Busqueda2Page implements OnInit {

  showItem = false;

  @ViewChild('popover') popover: any;

  rangeValue: number = 5;

  tabs = [
    { tab: 'cart', icon: '../../../assets/carrito.svg', route: '/home' },
    { tab: 'notification', icon: '../../../assets/home.svg', route: '/' },
    { tab: 'mesage', icon: '../../../assets/msj.svg' },
    { tab: 'profile', icon: '../../../assets/person.svg' }
  ];

  constructor(public router: Router) { }



  ngOnInit() {
  }
  toggleItem() {
    this.showItem=true;
    this.showItem = !this.showItem;
    this.router.navigate(['/login'])
  }

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }


 
}
