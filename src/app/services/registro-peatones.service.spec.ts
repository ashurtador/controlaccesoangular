import { TestBed } from '@angular/core/testing';

import { RegistroPeatonesService } from './registro-peatones.service';

describe('RegistroPeatonesService', () => {
  let service: RegistroPeatonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroPeatonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
