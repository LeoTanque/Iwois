import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Busqueda3Page } from './busqueda3.page';

describe('Busqueda3Page', () => {
  let component: Busqueda3Page;
  let fixture: ComponentFixture<Busqueda3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Busqueda3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
