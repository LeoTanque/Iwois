import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionPacientesFiltroPage } from './seleccion-pacientes-filtro.page';

describe('SeleccionPacientesFiltroPage', () => {
  let component: SeleccionPacientesFiltroPage;
  let fixture: ComponentFixture<SeleccionPacientesFiltroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionPacientesFiltroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
