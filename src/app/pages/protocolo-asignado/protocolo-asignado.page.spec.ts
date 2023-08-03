import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtocoloAsignadoPage } from './protocolo-asignado.page';

describe('ProtocoloAsignadoPage', () => {
  let component: ProtocoloAsignadoPage;
  let fixture: ComponentFixture<ProtocoloAsignadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProtocoloAsignadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
