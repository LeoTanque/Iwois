import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPacientesSinPage } from './lista-pacientes-sin.page';

describe('ListaPacientesSinPage', () => {
  let component: ListaPacientesSinPage;
  let fixture: ComponentFixture<ListaPacientesSinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaPacientesSinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
