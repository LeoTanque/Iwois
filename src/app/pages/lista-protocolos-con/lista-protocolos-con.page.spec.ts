import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaProtocolosConPage } from './lista-protocolos-con.page';

describe('ListaProtocolosConPage', () => {
  let component: ListaProtocolosConPage;
  let fixture: ComponentFixture<ListaProtocolosConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaProtocolosConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
