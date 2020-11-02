import { TestBed } from '@angular/core/testing';

import { LiteCoinService } from './lite-coin.service';

describe('LiteCoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteCoinService = TestBed.get(LiteCoinService);
    expect(service).toBeTruthy();
  });
});
