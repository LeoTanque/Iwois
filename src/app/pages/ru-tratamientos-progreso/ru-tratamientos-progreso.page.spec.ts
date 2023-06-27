import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RuTratamientosProgresoPage } from './ru-tratamientos-progreso.page';

describe('RuTratamientosProgresoPage', () => {
  let component: RuTratamientosProgresoPage;
  let fixture: ComponentFixture<RuTratamientosProgresoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RuTratamientosProgresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
