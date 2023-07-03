import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaArrPage } from './busqueda-arr.page';

describe('BusquedaArrPage', () => {
  let component: BusquedaArrPage;
  let fixture: ComponentFixture<BusquedaArrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusquedaArrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
