import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoSolicitudProductoPage } from './info-solicitud-producto.page';

describe('InfoSolicitudProductoPage', () => {
  let component: InfoSolicitudProductoPage;
  let fixture: ComponentFixture<InfoSolicitudProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoSolicitudProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
