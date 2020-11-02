import { TestBed } from '@angular/core/testing';

import { EtherumService } from './etherum.service';

describe('EtherumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtherumService = TestBed.get(EtherumService);
    expect(service).toBeTruthy();
  });
});
