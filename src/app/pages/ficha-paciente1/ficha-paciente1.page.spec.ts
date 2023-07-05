import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaPaciente1Page } from './ficha-paciente1.page';

describe('FichaPaciente1Page', () => {
  let component: FichaPaciente1Page;
  let fixture: ComponentFixture<FichaPaciente1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FichaPaciente1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
