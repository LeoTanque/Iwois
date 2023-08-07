import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocolo2Page } from './nuevo-protocolo2.page';

describe('NuevoProtocolo2Page', () => {
  let component: NuevoProtocolo2Page;
  let fixture: ComponentFixture<NuevoProtocolo2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocolo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
