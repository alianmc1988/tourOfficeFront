import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionNavbarComponent } from './session-navbar.component';

describe('SessionNavbarComponent', () => {
  let component: SessionNavbarComponent;
  let fixture: ComponentFixture<SessionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
