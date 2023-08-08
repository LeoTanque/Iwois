import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloFinalSuplementacionPage } from './nuevo-protocolo-final-suplementacion.page';

describe('NuevoProtocoloFinalSuplementacionPage', () => {
  let component: NuevoProtocoloFinalSuplementacionPage;
  let fixture: ComponentFixture<NuevoProtocoloFinalSuplementacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloFinalSuplementacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
