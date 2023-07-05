import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaPacientes2Page } from './busqueda-pacientes2.page';

describe('BusquedaPacientes2Page', () => {
  let component: BusquedaPacientes2Page;
  let fixture: ComponentFixture<BusquedaPacientes2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusquedaPacientes2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
