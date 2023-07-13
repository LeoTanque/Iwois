import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-custom-tab-bar',
  templateUrl: './custom-tab-bar.component.html',
  styleUrls: ['./custom-tab-bar.component.scss'],
})
export class CustomTabBarComponent  implements OnInit {
  tabs = [
    { tab: 'cart', icon: 'cart-outline' },
    { tab: 'notification', icon: 'home-outline' },
    { tab: 'profile', icon: 'person-outline' }
  ];
  
  constructor() { }

  ngOnInit() {}

}
