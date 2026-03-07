import { TestBed } from '@angular/core/testing';
import { Airplane } from './airplane';

describe('Airplane', () => {
  let service: Airplane;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Airplane);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
