import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { libraryRequiredGuard } from './library-required.guard';

describe('libraryRequiredGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => libraryRequiredGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
