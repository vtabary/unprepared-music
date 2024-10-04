import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AudioManagerService } from './audio-manager.service';

describe('AudioManagerService', () => {
  let service: AudioManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AudioManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
