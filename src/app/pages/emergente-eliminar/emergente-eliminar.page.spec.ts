import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmergenteEliminarPage } from './emergente-eliminar.page';

describe('EmergenteEliminarPage', () => {
  let component: EmergenteEliminarPage;
  let fixture: ComponentFixture<EmergenteEliminarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmergenteEliminarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
