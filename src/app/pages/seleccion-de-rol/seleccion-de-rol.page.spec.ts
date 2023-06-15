import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionDeRolPage } from './seleccion-de-rol.page';

describe('SeleccionDeRolPage', () => {
  let component: SeleccionDeRolPage;
  let fixture: ComponentFixture<SeleccionDeRolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionDeRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
