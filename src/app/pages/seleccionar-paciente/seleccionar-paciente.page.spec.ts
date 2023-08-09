import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarPacientePage } from './seleccionar-paciente.page';

describe('SeleccionarPacientePage', () => {
  let component: SeleccionarPacientePage;
  let fixture: ComponentFixture<SeleccionarPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionarPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
