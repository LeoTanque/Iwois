import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tratamientos25Page } from './tratamientos2.5.page';

describe('Tratamientos25Page', () => {
  let component: Tratamientos25Page;
  let fixture: ComponentFixture<Tratamientos25Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tratamientos25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
