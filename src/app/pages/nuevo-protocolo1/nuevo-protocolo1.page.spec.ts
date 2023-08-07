import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProtocolo1Page } from './nuevo-protocolo1.page';

describe('NuevoProtocolo1Page', () => {
  let component: NuevoProtocolo1Page;
  let fixture: ComponentFixture<NuevoProtocolo1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProtocolo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
