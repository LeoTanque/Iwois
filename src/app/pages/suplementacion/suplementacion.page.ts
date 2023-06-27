import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suplementacion',
  templateUrl: './suplementacion.page.html',
  styleUrls: ['./suplementacion.page.scss'],
})
export class SuplementacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  swiperSlideChanged(e:any){
    console.log('changed: ',e)
     }

}
