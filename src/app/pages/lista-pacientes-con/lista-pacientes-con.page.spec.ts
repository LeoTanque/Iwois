import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPacientesConPage } from './lista-pacientes-con.page';

describe('ListaPacientesConPage', () => {
  let component: ListaPacientesConPage;
  let fixture: ComponentFixture<ListaPacientesConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaPacientesConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
