import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatMedicoPage } from './chat-medico.page';

describe('ChatMedicoPage', () => {
  let component: ChatMedicoPage;
  let fixture: ComponentFixture<ChatMedicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
