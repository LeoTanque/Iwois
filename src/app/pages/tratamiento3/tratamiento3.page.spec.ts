import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tratamiento3Page } from './tratamiento3.page';

describe('Tratamiento3Page', () => {
  let component: Tratamiento3Page;
  let fixture: ComponentFixture<Tratamiento3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tratamiento3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
