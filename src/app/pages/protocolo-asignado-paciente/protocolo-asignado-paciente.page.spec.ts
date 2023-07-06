import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtocoloAsignadoPacientePage } from './protocolo-asignado-paciente.page';

describe('ProtocoloAsignadoPacientePage', () => {
  let component: ProtocoloAsignadoPacientePage;
  let fixture: ComponentFixture<ProtocoloAsignadoPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProtocoloAsignadoPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
