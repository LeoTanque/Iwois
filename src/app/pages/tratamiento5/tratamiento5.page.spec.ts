import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tratamiento5Page } from './tratamiento5.page';

describe('Tratamiento5Page', () => {
  let component: Tratamiento5Page;
  let fixture: ComponentFixture<Tratamiento5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tratamiento5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
