import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.component.html',
  styleUrls: ['./exito.component.scss'],
})
export class ExitoComponent  implements OnInit {
  @Input() text: string = '';
  @Input() images: string[] = [];
  @Input() cardButtonContent: string = '';
  @Input() secondImageIcon: string = '';
  @Input() iconRoute: string = '';
  
  constructor(private router: Router) {}

  ngOnInit() {} 
 

  chunkArray(array: any[], chunkSize: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }


  navigateTo(route: string) {
    this.router.navigateByUrl(route); // Utiliza el router para redireccionar a la ruta especificada
  }

}
