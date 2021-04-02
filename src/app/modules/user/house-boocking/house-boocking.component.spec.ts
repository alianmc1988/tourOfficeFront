import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBoockingComponent } from './house-boocking.component';

describe('HouseBoockingComponent', () => {
  let component: HouseBoockingComponent;
  let fixture: ComponentFixture<HouseBoockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseBoockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBoockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
