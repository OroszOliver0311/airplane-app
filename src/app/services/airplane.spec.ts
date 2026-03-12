import { TestBed } from '@angular/core/testing';
import { AirplaneService } from './airplane';

describe('AirplaneService', () => {
  let service: AirplaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirplaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
