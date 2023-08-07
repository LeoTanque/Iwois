import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloPage } from './nuevo-protocolo.page';

describe('NuevoProtocoloPage', () => {
  let component: NuevoProtocoloPage;
  let fixture: ComponentFixture<NuevoProtocoloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
