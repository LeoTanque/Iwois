import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloEjercicioPage } from './nuevo-protocolo-ejercicio.page';

describe('NuevoProtocoloEjercicioPage', () => {
  let component: NuevoProtocoloEjercicioPage;
  let fixture: ComponentFixture<NuevoProtocoloEjercicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
