import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneAdd } from './airplane-add';

describe('AirplaneAdd', () => {
  let component: AirplaneAdd;
  let fixture: ComponentFixture<AirplaneAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirplaneAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(AirplaneAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
