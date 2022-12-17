import { TestBed } from '@angular/core/testing';

import { BusquedaVehiculosService } from './busqueda-vehiculos.service';

describe('BusquedaVehiculosService', () => {
  let service: BusquedaVehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaVehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
