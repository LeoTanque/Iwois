import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerProtocoloCreadoAdmin1Page } from './ver-protocolo-creado-admin1.page';

describe('VerProtocoloCreadoAdmin1Page', () => {
  let component: VerProtocoloCreadoAdmin1Page;
  let fixture: ComponentFixture<VerProtocoloCreadoAdmin1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerProtocoloCreadoAdmin1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
