import { TestBed } from '@angular/core/testing';

import { BanktransactionService } from './transaction.service';

describe('BanktransactionService', () => {
  let service: BanktransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanktransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
