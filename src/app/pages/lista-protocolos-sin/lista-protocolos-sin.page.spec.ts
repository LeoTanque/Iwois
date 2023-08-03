import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaProtocolosSinPage } from './lista-protocolos-sin.page';

describe('ListaProtocolosSinPage', () => {
  let component: ListaProtocolosSinPage;
  let fixture: ComponentFixture<ListaProtocolosSinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaProtocolosSinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
