import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtocoloAsignadoPaciente2Page } from './protocolo-asignado-paciente2.page';

describe('ProtocoloAsignadoPaciente2Page', () => {
  let component: ProtocoloAsignadoPaciente2Page;
  let fixture: ComponentFixture<ProtocoloAsignadoPaciente2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProtocoloAsignadoPaciente2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
