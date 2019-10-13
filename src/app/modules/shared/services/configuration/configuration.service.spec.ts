import { TestBed } from '@angular/core/testing';

import { ConfigurationService } from './configuration.service';
import { NgxElectronModule } from 'ngx-electron';

describe('ConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ NgxElectronModule ],
  }));

  it('should be created', () => {
    const service: ConfigurationService = TestBed.get(ConfigurationService);
    expect(service).toBeTruthy();
  });
});
