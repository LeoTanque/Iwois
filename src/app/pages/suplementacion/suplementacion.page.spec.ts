import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuplementacionPage } from './suplementacion.page';

describe('SuplementacionPage', () => {
  let component: SuplementacionPage;
  let fixture: ComponentFixture<SuplementacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuplementacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
