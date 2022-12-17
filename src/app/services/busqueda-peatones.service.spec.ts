import { TestBed } from '@angular/core/testing';

import { BusquedaPeatonesService } from './busqueda-peatones.service';

describe('BusquedaPeatonesService', () => {
  let service: BusquedaPeatonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaPeatonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
