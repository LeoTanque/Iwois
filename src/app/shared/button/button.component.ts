import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {
  @Input()
  content!: string;
  @Input() styles: any;
  @Input() redirect: string = '';
  @Input() color!: string;
  @Input() position!: string;
  @Input() backgroundColor: string = '';
  @Input() width!: string;

  constructor(private router: Router) { }

  ngOnInit() {}


  onClick() {
    if (this.redirect) {
      
      this.router.navigate([this.redirect]);
    }
  }
}
