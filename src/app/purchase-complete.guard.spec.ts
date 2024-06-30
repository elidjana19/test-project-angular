import { TestBed } from '@angular/core/testing';

import { PurchaseCompleteGuard } from './purchase-complete.guard';

describe('PurchaseCompleteGuard', () => {
  let guard: PurchaseCompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PurchaseCompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
