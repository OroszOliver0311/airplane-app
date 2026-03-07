import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneDetail } from './airplane-detail';

describe('AirplaneDetail', () => {
  let component: AirplaneDetail;
  let fixture: ComponentFixture<AirplaneDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirplaneDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(AirplaneDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
