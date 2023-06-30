import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosAdicionalesPage } from './servicios-adicionales.page';

describe('ServiciosAdicionalesPage', () => {
  let component: ServiciosAdicionalesPage;
  let fixture: ComponentFixture<ServiciosAdicionalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiciosAdicionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
