import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtocoloAsignadoPaciente1Page } from './protocolo-asignado-paciente1.page';

describe('ProtocoloAsignadoPaciente1Page', () => {
  let component: ProtocoloAsignadoPaciente1Page;
  let fixture: ComponentFixture<ProtocoloAsignadoPaciente1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProtocoloAsignadoPaciente1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
