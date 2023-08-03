import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionPrePostProtocoloPage } from './seleccion-pre-post-protocolo.page';

describe('SeleccionPrePostProtocoloPage', () => {
  let component: SeleccionPrePostProtocoloPage;
  let fixture: ComponentFixture<SeleccionPrePostProtocoloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionPrePostProtocoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
