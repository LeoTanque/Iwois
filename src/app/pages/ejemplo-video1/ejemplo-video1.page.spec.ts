import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploVideo1Page } from './ejemplo-video1.page';

describe('EjemploVideo1Page', () => {
  let component: EjemploVideo1Page;
  let fixture: ComponentFixture<EjemploVideo1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EjemploVideo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
