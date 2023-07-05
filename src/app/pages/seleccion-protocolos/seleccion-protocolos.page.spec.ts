import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionProtocolosPage } from './seleccion-protocolos.page';

describe('SeleccionProtocolosPage', () => {
  let component: SeleccionProtocolosPage;
  let fixture: ComponentFixture<SeleccionProtocolosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionProtocolosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
