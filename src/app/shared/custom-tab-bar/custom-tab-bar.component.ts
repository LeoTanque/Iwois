import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-tab-bar',
  templateUrl: './custom-tab-bar.component.html',
  styleUrls: ['./custom-tab-bar.component.scss'],
})
export class CustomTabBarComponent  implements OnInit {
@Input() tabs:any[]=[];
@Input() router!: Router;
//@Input() secondIconSize: string = '24px';
 /* tabs = [
    { tab: 'cart', icon: '../../../assets/carrito.svg' },
    { tab: 'notification', icon: '../../../assets/homer.svg' },
    { tab: 'mesage', icon: '../../../assets/msj.svg' },
    { tab: 'profile', icon: '../../../assets/person.svg' }
  ];*/
  constructor() { } 

  ngOnInit() {}

  onTabClick(route: string) {
    this.router.navigate([route]);
  }
}
