import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocoloFinal2Page } from './nuevo-protocolo-final2.page';

describe('NuevoProtocoloFinal2Page', () => {
  let component: NuevoProtocoloFinal2Page;
  let fixture: ComponentFixture<NuevoProtocoloFinal2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocoloFinal2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
