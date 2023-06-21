import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tratamientos2Page } from './tratamientos2.page';

describe('Tratamientos2Page', () => {
  let component: Tratamientos2Page;
  let fixture: ComponentFixture<Tratamientos2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tratamientos2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
