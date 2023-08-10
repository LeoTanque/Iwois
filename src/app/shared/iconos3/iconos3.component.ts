import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iconos3',
  templateUrl: './iconos3.component.html',
  styleUrls: ['./iconos3.component.scss'],
})
export class Iconos3Component  implements OnInit {

  @Input() iconNames: string[] = [];
  @Input() routeA: string = '';
  @Input() routeB: string = '';
  @Input() routeC: string = '';
  @Input() routeD: string = '';
  @Input() routeE: string = '';

  constructor(public router: Router) { }

  ngOnInit() {}


  getIconPath(iconName: string): string {
    // Concatena la ruta hacia la carpeta "assets" con el nombre del icono
    return `assets/${iconName}.svg`;
  }

  redirectTo(route: string): void {
    // Aquí podrías usar el enrutador para redirigir a la página deseada
    // Por ejemplo, puedes usar el siguiente código si tienes el enrutador importado:
    this.router.navigate([route]);
    console.log(`Redirigiendo a la página: ${route}`);
}

}
