import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAvisoPage } from './registro-aviso.page';

describe('RegistroAvisoPage', () => {
  let component: RegistroAvisoPage;
  let fixture: ComponentFixture<RegistroAvisoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroAvisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
