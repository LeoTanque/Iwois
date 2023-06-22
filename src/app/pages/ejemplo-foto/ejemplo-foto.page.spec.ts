import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploFotoPage } from './ejemplo-foto.page';

describe('EjemploFotoPage', () => {
  let component: EjemploFotoPage;
  let fixture: ComponentFixture<EjemploFotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EjemploFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
