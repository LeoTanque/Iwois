import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarContrsenaPage } from './cambiar-contrsena.page';

describe('CambiarContrsenaPage', () => {
  let component: CambiarContrsenaPage;
  let fixture: ComponentFixture<CambiarContrsenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambiarContrsenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
