import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-profesional',
  templateUrl: './home-profesional.page.html',
  styleUrls: ['./home-profesional.page.scss'],
})
export class HomeProfesionalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
