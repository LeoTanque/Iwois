import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RuTratamientosPage } from './ru-tratamientos.page';

describe('RuTratamientosPage', () => {
  let component: RuTratamientosPage;
  let fixture: ComponentFixture<RuTratamientosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RuTratamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
