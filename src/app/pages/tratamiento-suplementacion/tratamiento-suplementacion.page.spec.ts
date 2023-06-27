import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TratamientoSuplementacionPage } from './tratamiento-suplementacion.page';

describe('TratamientoSuplementacionPage', () => {
  let component: TratamientoSuplementacionPage;
  let fixture: ComponentFixture<TratamientoSuplementacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TratamientoSuplementacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
