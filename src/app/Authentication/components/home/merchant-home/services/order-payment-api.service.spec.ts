import { TestBed } from '@angular/core/testing';

import { OrderPaymentApiService } from './order-payment-api.service';

describe('OrderPaymentApiService', () => {
  let service: OrderPaymentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPaymentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
