import { TestBed } from '@angular/core/testing';
import { NgxElectronModule } from 'ngx-electron';

import { MusicLibraryService } from './music-library.service';

describe('MusicLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ NgxElectronModule ],
  }));

  it('should be created', () => {
    const service: MusicLibraryService = TestBed.get(MusicLibraryService);
    expect(service).toBeTruthy();
  });
});
