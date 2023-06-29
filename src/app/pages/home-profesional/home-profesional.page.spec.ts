import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProfesionalPage } from './home-profesional.page';

describe('HomeProfesionalPage', () => {
  let component: HomeProfesionalPage;
  let fixture: ComponentFixture<HomeProfesionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
