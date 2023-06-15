import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelIdiomaPage } from './sel-idioma.page';

describe('SelIdiomaPage', () => {
  let component: SelIdiomaPage;
  let fixture: ComponentFixture<SelIdiomaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelIdiomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
