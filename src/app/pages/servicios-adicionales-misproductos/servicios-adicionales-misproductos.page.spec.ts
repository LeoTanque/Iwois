import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosAdicionalesMisproductosPage } from './servicios-adicionales-misproductos.page';

describe('ServiciosAdicionalesMisproductosPage', () => {
  let component: ServiciosAdicionalesMisproductosPage;
  let fixture: ComponentFixture<ServiciosAdicionalesMisproductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiciosAdicionalesMisproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
