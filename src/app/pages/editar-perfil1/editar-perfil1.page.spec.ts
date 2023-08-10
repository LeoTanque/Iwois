import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfil1Page } from './editar-perfil1.page';

describe('EditarPerfil1Page', () => {
  let component: EditarPerfil1Page;
  let fixture: ComponentFixture<EditarPerfil1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarPerfil1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
