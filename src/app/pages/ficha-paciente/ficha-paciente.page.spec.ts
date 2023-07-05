import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaPacientePage } from './ficha-paciente.page';

describe('FichaPacientePage', () => {
  let component: FichaPacientePage;
  let fixture: ComponentFixture<FichaPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FichaPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
