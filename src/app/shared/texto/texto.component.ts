import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss'],
})
export class TextoComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  redirectToChat() {
    this.router.navigate(['/chat']);
  }
}
