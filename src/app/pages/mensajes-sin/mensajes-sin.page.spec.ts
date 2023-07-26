import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesSinPage } from './mensajes-sin.page';

describe('MensajesSinPage', () => {
  let component: MensajesSinPage;
  let fixture: ComponentFixture<MensajesSinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesSinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
