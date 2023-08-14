import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasoExito5Page } from './caso-exito5.page';

describe('CasoExito5Page', () => {
  let component: CasoExito5Page;
  let fixture: ComponentFixture<CasoExito5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CasoExito5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
