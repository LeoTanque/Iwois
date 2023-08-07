import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloSuplementacionPage } from './nuevo-protocolo-suplementacion.page';

describe('NuevoProtocoloSuplementacionPage', () => {
  let component: NuevoProtocoloSuplementacionPage;
  let fixture: ComponentFixture<NuevoProtocoloSuplementacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloSuplementacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
