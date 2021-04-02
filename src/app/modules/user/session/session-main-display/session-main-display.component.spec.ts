import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionMainDisplayComponent } from './session-main-display.component';

describe('SessionMainDisplayComponent', () => {
  let component: SessionMainDisplayComponent;
  let fixture: ComponentFixture<SessionMainDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionMainDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionMainDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
