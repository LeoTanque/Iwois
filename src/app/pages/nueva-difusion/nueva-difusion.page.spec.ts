import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaDifusionPage } from './nueva-difusion.page';

describe('NuevaDifusionPage', () => {
  let component: NuevaDifusionPage;
  let fixture: ComponentFixture<NuevaDifusionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaDifusionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
