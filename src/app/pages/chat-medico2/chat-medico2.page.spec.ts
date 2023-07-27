import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatMedico2Page } from './chat-medico2.page';

describe('ChatMedico2Page', () => {
  let component: ChatMedico2Page;
  let fixture: ComponentFixture<ChatMedico2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatMedico2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
