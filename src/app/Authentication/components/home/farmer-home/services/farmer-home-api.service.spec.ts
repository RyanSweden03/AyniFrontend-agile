import { TestBed } from '@angular/core/testing';

import { FarmerHomeApiService } from './farmer-home-api.service';

describe('FarmerHomeApiService', () => {
  let service: FarmerHomeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerHomeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
