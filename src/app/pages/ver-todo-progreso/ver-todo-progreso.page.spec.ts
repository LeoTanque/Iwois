import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerTodoProgresoPage } from './ver-todo-progreso.page';

describe('VerTodoProgresoPage', () => {
  let component: VerTodoProgresoPage;
  let fixture: ComponentFixture<VerTodoProgresoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerTodoProgresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
