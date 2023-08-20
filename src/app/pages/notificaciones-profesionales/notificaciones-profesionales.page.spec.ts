import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificacionesProfesionalesPage } from './notificaciones-profesionales.page';

describe('NotificacionesProfesionalesPage', () => {
  let component: NotificacionesProfesionalesPage;
  let fixture: ComponentFixture<NotificacionesProfesionalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotificacionesProfesionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
