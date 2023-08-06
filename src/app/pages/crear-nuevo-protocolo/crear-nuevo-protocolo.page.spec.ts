import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearNuevoProtocoloPage } from './crear-nuevo-protocolo.page';

describe('CrearNuevoProtocoloPage', () => {
  let component: CrearNuevoProtocoloPage;
  let fixture: ComponentFixture<CrearNuevoProtocoloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearNuevoProtocoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
