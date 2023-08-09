import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarProtocoloPaciente1Page } from './asignar-protocolo-paciente1.page';

describe('AsignarProtocoloPaciente1Page', () => {
  let component: AsignarProtocoloPaciente1Page;
  let fixture: ComponentFixture<AsignarProtocoloPaciente1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignarProtocoloPaciente1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
