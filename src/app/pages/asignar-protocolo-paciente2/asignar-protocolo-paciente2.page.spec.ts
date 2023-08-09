import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarProtocoloPaciente2Page } from './asignar-protocolo-paciente2.page';

describe('AsignarProtocoloPaciente2Page', () => {
  let component: AsignarProtocoloPaciente2Page;
  let fixture: ComponentFixture<AsignarProtocoloPaciente2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignarProtocoloPaciente2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
