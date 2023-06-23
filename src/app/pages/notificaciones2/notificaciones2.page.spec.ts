import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notificaciones2Page } from './notificaciones2.page';

describe('Notificaciones2Page', () => {
  let component: Notificaciones2Page;
  let fixture: ComponentFixture<Notificaciones2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Notificaciones2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
