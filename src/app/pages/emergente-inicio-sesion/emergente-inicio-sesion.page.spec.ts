import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmergenteInicioSesionPage } from './emergente-inicio-sesion.page';

describe('EmergenteInicioSesionPage', () => {
  let component: EmergenteInicioSesionPage;
  let fixture: ComponentFixture<EmergenteInicioSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmergenteInicioSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
