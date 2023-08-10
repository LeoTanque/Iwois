import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosAdicionalesVenderPage } from './servicios-adicionales-vender.page';

describe('ServiciosAdicionalesVenderPage', () => {
  let component: ServiciosAdicionalesVenderPage;
  let fixture: ComponentFixture<ServiciosAdicionalesVenderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiciosAdicionalesVenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
