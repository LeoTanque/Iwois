import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloFinal1Page } from './nuevo-protocolo-final1.page';

describe('NuevoProtocoloFinal1Page', () => {
  let component: NuevoProtocoloFinal1Page;
  let fixture: ComponentFixture<NuevoProtocoloFinal1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloFinal1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
