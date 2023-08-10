import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrarPacientes1Page } from './filtrar-pacientes1.page';

describe('FiltrarPacientes1Page', () => {
  let component: FiltrarPacientes1Page;
  let fixture: ComponentFixture<FiltrarPacientes1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiltrarPacientes1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
