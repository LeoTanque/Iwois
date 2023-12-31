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
@Input() iconStyles: any[] = [];
@Input() tabRoutes: any[] = [];


  constructor() { } 

  ngOnInit() {}

  getIconStyles(tab: string) {
    const style = this.iconStyles.find(item => item.tab === tab)?.styles;
    return style ? this.convertStyleToString(style) : '';
  }

  private convertStyleToString(style: any) {
    return Object.entries(style).map(([key, value]) => `${key}: ${value}`).join('; ');
  }

  

  onTabClick(index: number) {
    const route = this.tabRoutes[index].route;
    this.router.navigate([route]);
  }
  

  
}
