import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloFinalEjercicioPage } from './nuevo-protocolo-final-ejercicio.page';

describe('NuevoProtocoloFinalEjercicioPage', () => {
  let component: NuevoProtocoloFinalEjercicioPage;
  let fixture: ComponentFixture<NuevoProtocoloFinalEjercicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloFinalEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
