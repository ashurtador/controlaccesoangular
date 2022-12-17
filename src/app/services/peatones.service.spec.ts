import { TestBed } from '@angular/core/testing';

import { PeatonesService } from './peatones.service';

describe('PeatonesService', () => {
  let service: PeatonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeatonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
