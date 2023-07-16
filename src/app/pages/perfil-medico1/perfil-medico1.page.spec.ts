import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilMedico1Page } from './perfil-medico1.page';

describe('PerfilMedico1Page', () => {
  let component: PerfilMedico1Page;
  let fixture: ComponentFixture<PerfilMedico1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilMedico1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
