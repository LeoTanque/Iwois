import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrarPacientes2Page } from './filtrar-pacientes2.page';

describe('FiltrarPacientes2Page', () => {
  let component: FiltrarPacientes2Page;
  let fixture: ComponentFixture<FiltrarPacientes2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiltrarPacientes2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
