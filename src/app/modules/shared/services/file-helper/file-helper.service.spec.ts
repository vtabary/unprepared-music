import { TestBed } from '@angular/core/testing';

import { FileHelperService } from './file-helper.service';
import { NgxElectronModule } from 'ngx-electron';

describe('FileHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ NgxElectronModule ],
  }));

  it('should be created', () => {
    const service: FileHelperService = TestBed.get(FileHelperService);
    expect(service).toBeTruthy();
  });
});
