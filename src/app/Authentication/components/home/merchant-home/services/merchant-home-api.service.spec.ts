import { TestBed } from '@angular/core/testing';

import { MerchantHomeApiService } from './merchant-home-api.service';

describe('MerchantHomeApiService', () => {
  let service: MerchantHomeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantHomeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
