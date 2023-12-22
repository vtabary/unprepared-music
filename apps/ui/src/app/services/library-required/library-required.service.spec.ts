import { TestBed } from '@angular/core/testing';

import { LibraryRequiredService } from './library-required.service';

describe('LibraryRequiredService', () => {
  let service: LibraryRequiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryRequiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
