import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPerdidosPage } from './registro-perdidos.page';

describe('RegistroPerdidosPage', () => {
  let component: RegistroPerdidosPage;
  let fixture: ComponentFixture<RegistroPerdidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroPerdidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
