import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Busqueda2Page } from './busqueda2.page';

describe('Busqueda2Page', () => {
  let component: Busqueda2Page;
  let fixture: ComponentFixture<Busqueda2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Busqueda2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
