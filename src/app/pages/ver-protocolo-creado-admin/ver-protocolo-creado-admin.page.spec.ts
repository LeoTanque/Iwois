import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerProtocoloCreadoAdminPage } from './ver-protocolo-creado-admin.page';

describe('VerProtocoloCreadoAdminPage', () => {
  let component: VerProtocoloCreadoAdminPage;
  let fixture: ComponentFixture<VerProtocoloCreadoAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerProtocoloCreadoAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
