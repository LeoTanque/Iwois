import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal', 
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  @Input() paragraphText: string = '';
  @Input() buttonText: string = '';
  @Input() closeRoute:any; 
  @Input() continueRoute:any;
 
  constructor(public router: Router) { }

  ngOnInit() {} 

  navigateToNotification() {
    this.router.navigate([this.closeRoute]);
  }

  navigateBack() {
    this.router.navigate([this.continueRoute]);
  }
}
