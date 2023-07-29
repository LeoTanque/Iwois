import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent  implements OnInit {


  @Input() images: string[] = [];
  @Input() imageSizes: number[] = []; // Tamaños personalizados de las imágenes
  @Input() defaultImageSize: number = 100; // Tamaño predeterminado (para las imágenes sin tamaño específico)
  @Input() largeImageIndex: number = -1; // Índice de la imagen que será más grande
  imageRows: string[][] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['images'] || changes['imageSizes'] || changes['largeImageIndex']) {
      this.generateImageRows();
    }
  }

  private generateImageRows() {
    this.imageRows = [];
    for (let i = 0; i < this.images.length; i += 2) {
      const row = [this.images[i], this.images[i + 1]];
      this.imageRows.push(row);
    }
  }

  // Función para obtener el tamaño de la imagen en un índice dado
  getImageSize(index: number): number {
    if (this.imageSizes && this.imageSizes[index] !== undefined) {
      return this.imageSizes[index];
    }
    return this.defaultImageSize;
  }
  constructor() { }

  ngOnInit() {}

}
