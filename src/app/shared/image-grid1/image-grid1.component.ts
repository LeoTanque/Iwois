import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-grid1',
  templateUrl: './image-grid1.component.html',
  styleUrls: ['./image-grid1.component.scss'],
}) 
export class ImageGrid1Component  implements OnInit {
  @Input() images: string[] = [];
  imageRows: string[][] = [];
  @Input()
  imageSize!: number;
  @Input() largeImageIndex: number = -1;
  @Input() largeImageIndices: number[] = [];
  @Input() icons: string[] = [];
  @Input() iconNames: string[][] = []; 
  @Input() iconRoutes: any[][] = [];
  @Input() imageRoutes: string[][] = [];
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


  constructor(public router: Router) { }

  ngOnInit() {}


  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  navigateToImage(route: string) {
    this.router.navigateByUrl(route);
  }
  

}
