import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceStatusBar } from './maintenance-status-bar';

describe('MaintenanceStatusBar', () => {
  let component: MaintenanceStatusBar;
  let fixture: ComponentFixture<MaintenanceStatusBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceStatusBar],
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceStatusBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
