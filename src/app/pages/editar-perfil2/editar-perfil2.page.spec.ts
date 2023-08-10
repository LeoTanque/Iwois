import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfil2Page } from './editar-perfil2.page';

describe('EditarPerfil2Page', () => {
  let component: EditarPerfil2Page;
  let fixture: ComponentFixture<EditarPerfil2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarPerfil2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
