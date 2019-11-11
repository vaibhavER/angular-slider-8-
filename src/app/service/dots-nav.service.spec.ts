import { TestBed } from '@angular/core/testing';

import { DotsNavService } from './dots-nav.service';

describe('DotsNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DotsNavService = TestBed.get(DotsNavService);
    expect(service).toBeTruthy();
  });
});
