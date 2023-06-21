import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisTratamientos3Page } from './mis-tratamientos3.page';

describe('MisTratamientos3Page', () => {
  let component: MisTratamientos3Page;
  let fixture: ComponentFixture<MisTratamientos3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisTratamientos3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
