import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TratamientoEjercicioPage } from './tratamiento-ejercicio.page';

describe('TratamientoEjercicioPage', () => {
  let component: TratamientoEjercicioPage;
  let fixture: ComponentFixture<TratamientoEjercicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TratamientoEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
