import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMensajesPage } from './home-mensajes.page';

describe('HomeMensajesPage', () => {
  let component: HomeMensajesPage;
  let fixture: ComponentFixture<HomeMensajesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeMensajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
