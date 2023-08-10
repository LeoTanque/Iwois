import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent  implements OnInit {
  @Input() images: string[] = [];
  imageRows: string[][] = [];
  @Input()
  imageSize!: number;
  @Input() largeImageIndex: number = -1;
  ngOnChanges() { 
    this.generateImageRows();
  }
 
  private generateImageRows() {
    this.imageRows = [];
    for (let i = 0; i < this.images.length; i += 2) {
      const row = [this.images[i], this.images[i + 1]];
      this.imageRows.push(row);
    }
  }


 
  constructor() { }

  ngOnInit() {}

}
