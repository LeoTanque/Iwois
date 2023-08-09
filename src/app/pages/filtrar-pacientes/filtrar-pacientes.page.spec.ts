import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrarPacientesPage } from './filtrar-pacientes.page';

describe('FiltrarPacientesPage', () => {
  let component: FiltrarPacientesPage;
  let fixture: ComponentFixture<FiltrarPacientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiltrarPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
