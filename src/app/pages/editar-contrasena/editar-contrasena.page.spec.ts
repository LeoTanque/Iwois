import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarContrasenaPage } from './editar-contrasena.page';

describe('EditarContrasenaPage', () => {
  let component: EditarContrasenaPage;
  let fixture: ComponentFixture<EditarContrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
