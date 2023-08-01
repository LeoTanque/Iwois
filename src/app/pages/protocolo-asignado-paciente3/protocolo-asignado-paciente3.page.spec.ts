import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtocoloAsignadoPaciente3Page } from './protocolo-asignado-paciente3.page';

describe('ProtocoloAsignadoPaciente3Page', () => {
  let component: ProtocoloAsignadoPaciente3Page;
  let fixture: ComponentFixture<ProtocoloAsignadoPaciente3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProtocoloAsignadoPaciente3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
