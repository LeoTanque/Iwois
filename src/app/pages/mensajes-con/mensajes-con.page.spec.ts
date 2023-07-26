import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesConPage } from './mensajes-con.page';

describe('MensajesConPage', () => {
  let component: MensajesConPage;
  let fixture: ComponentFixture<MensajesConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
