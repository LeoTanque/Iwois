import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superior',
  templateUrl: './superior.component.html',
  styleUrls: ['./superior.component.scss'],
})
export class SuperiorComponent  implements OnInit {
  
  @Input() notificationRoute!: any;
  @Input() backRoute!:any;
  
  constructor(private router: Router) { }

  ngOnInit() {}


  navigateToNotification() {
    this.router.navigate([this.notificationRoute]);
  }

  navigateBack() {
    this.router.navigate([this.backRoute]);
  }
} 
