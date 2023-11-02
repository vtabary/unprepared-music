import { TestBed } from '@angular/core/testing';

import { PlayerConfigurationService } from './player-configuration.service';

describe('PlayerConfigurationService', () => {
  let service: PlayerConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
