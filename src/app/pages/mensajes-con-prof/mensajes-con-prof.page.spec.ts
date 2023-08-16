import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesConProfPage } from './mensajes-con-prof.page';

describe('MensajesConProfPage', () => {
  let component: MensajesConProfPage;
  let fixture: ComponentFixture<MensajesConProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesConProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
