import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfil5Page } from './editar-perfil5.page';

describe('EditarPerfil5Page', () => {
  let component: EditarPerfil5Page;
  let fixture: ComponentFixture<EditarPerfil5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarPerfil5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
