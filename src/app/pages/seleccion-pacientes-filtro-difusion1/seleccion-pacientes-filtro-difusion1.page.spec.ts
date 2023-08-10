import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionPacientesFiltroDifusion1Page } from './seleccion-pacientes-filtro-difusion1.page';

describe('SeleccionPacientesFiltroDifusion1Page', () => {
  let component: SeleccionPacientesFiltroDifusion1Page;
  let fixture: ComponentFixture<SeleccionPacientesFiltroDifusion1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionPacientesFiltroDifusion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
