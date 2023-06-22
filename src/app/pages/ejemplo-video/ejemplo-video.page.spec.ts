import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploVideoPage } from './ejemplo-video.page';

describe('EjemploVideoPage', () => {
  let component: EjemploVideoPage;
  let fixture: ComponentFixture<EjemploVideoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EjemploVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
