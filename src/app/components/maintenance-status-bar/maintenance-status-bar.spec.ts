import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceStatusBarComponent } from './maintenance-status-bar';

describe('MaintenanceStatusBar', () => {
  let component: MaintenanceStatusBarComponent;
  let fixture: ComponentFixture<MaintenanceStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceStatusBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceStatusBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
