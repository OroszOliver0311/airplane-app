import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneListComponent } from './airplane-list';

describe('AirplaneList', () => {
  let component: AirplaneListComponent;
  let fixture: ComponentFixture<AirplaneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirplaneListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirplaneListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
