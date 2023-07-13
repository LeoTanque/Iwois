import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tab-bar',
  templateUrl: './custom-tab-bar.component.html',
  styleUrls: ['./custom-tab-bar.component.scss'],
})
export class CustomTabBarComponent  implements OnInit {
@Input() tabs:any[]=[];
//@Input() secondIconSize: string = '24px';
 /* tabs = [
    { tab: 'cart', icon: '../../../assets/carrito.svg' },
    { tab: 'notification', icon: '../../../assets/homer.svg' },
    { tab: 'mesage', icon: '../../../assets/msj.svg' },
    { tab: 'profile', icon: '../../../assets/person.svg' }
  ];*/
  constructor() { } 

  ngOnInit() {}

}
