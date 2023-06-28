import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tratamiento4Page } from './tratamiento4.page';

describe('Tratamiento4Page', () => {
  let component: Tratamiento4Page;
  let fixture: ComponentFixture<Tratamiento4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tratamiento4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
