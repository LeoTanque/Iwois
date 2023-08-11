import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPerfil3Page } from './editar-perfil3.page';

describe('EditarPerfil3Page', () => {
  let component: EditarPerfil3Page;
  let fixture: ComponentFixture<EditarPerfil3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarPerfil3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
