import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloFinalPage } from './nuevo-protocolo-final.page';

describe('NuevoProtocoloFinalPage', () => {
  let component: NuevoProtocoloFinalPage;
  let fixture: ComponentFixture<NuevoProtocoloFinalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
