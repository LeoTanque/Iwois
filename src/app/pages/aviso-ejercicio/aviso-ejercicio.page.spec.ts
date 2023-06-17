import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisoEjercicioPage } from './aviso-ejercicio.page';

describe('AvisoEjercicioPage', () => {
  let component: AvisoEjercicioPage;
  let fixture: ComponentFixture<AvisoEjercicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvisoEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
