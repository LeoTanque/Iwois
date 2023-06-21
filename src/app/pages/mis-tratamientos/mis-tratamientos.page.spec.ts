import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisTratamientosPage } from './mis-tratamientos.page';

describe('MisTratamientosPage', () => {
  let component: MisTratamientosPage;
  let fixture: ComponentFixture<MisTratamientosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisTratamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
