import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPacientesDifusionPage } from './listado-pacientes-difusion.page';

describe('ListadoPacientesDifusionPage', () => {
  let component: ListadoPacientesDifusionPage;
  let fixture: ComponentFixture<ListadoPacientesDifusionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoPacientesDifusionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
