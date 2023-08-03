import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueSehaSeleccionadoPage } from './que-seha-seleccionado.page';

describe('QueSehaSeleccionadoPage', () => {
  let component: QueSehaSeleccionadoPage;
  let fixture: ComponentFixture<QueSehaSeleccionadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QueSehaSeleccionadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
