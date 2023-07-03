import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosAdicionalesProducto1Page } from './servicios-adicionales-producto1.page';

describe('ServiciosAdicionalesProducto1Page', () => {
  let component: ServiciosAdicionalesProducto1Page;
  let fixture: ComponentFixture<ServiciosAdicionalesProducto1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiciosAdicionalesProducto1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
