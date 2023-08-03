import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionFechaTratamientoPage } from './seleccion-fecha-tratamiento.page';

describe('SeleccionFechaTratamientoPage', () => {
  let component: SeleccionFechaTratamientoPage;
  let fixture: ComponentFixture<SeleccionFechaTratamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionFechaTratamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
