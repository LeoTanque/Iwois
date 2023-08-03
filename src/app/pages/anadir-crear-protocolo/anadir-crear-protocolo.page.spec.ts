import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirCrearProtocoloPage } from './anadir-crear-protocolo.page';

describe('AnadirCrearProtocoloPage', () => {
  let component: AnadirCrearProtocoloPage;
  let fixture: ComponentFixture<AnadirCrearProtocoloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnadirCrearProtocoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
