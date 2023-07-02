import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-profesional',
  templateUrl: './registro-profesional.page.html',
  styleUrls: ['./registro-profesional.page.scss'],
})
export class RegistroProfesionalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  swiperSlideChanged(e:any){
    console.log('changed: ',e)
     }
}
