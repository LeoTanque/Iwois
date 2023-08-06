import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton2',
  templateUrl: './boton2.component.html',
  styleUrls: ['./boton2.component.scss'],
})
export class Boton2Component  implements OnInit {

  @Input()
  content!: string;
  @Input() styles: any;
  @Input() redirect: string = '';
  @Input() color!: string;
  @Input() position!: string;
  @Input() backgroundColor: string = '';
  @Input() width!: string;
  @Input() icon: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}
 

  onClick() {
    if (this.redirect) {
      
      this.router.navigate([this.redirect]);
    }
  }



}
