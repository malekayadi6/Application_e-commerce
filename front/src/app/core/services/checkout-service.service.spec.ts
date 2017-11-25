import { TestBed, inject } from '@angular/core/testing';

import { CheckoutServiceService } from './checkout-service.service';

describe('CheckoutServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckoutServiceService]
    });
  });

  it('should be created', inject([CheckoutServiceService], (service: CheckoutServiceService) => {
    expect(service).toBeTruthy();
  }));
});
