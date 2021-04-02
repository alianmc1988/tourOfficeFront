import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmitterComponent } from './user-emitter.component';

describe('UserEmitterComponent', () => {
  let component: UserEmitterComponent;
  let fixture: ComponentFixture<UserEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
