import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneAddComponent } from './airplane-add';

describe('AirplaneAdd', () => {
  let component: AirplaneAddComponent;
  let fixture: ComponentFixture<AirplaneAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirplaneAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirplaneAddComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
