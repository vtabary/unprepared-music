import { Injectable } from '@angular/core';
import { IAudioFunctions } from '@local/shared-interfaces';
import { from, NEVER, Observable } from 'rxjs';

declare global {
  interface Window {
    audio: IAudioFunctions;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  /**
   * Load items from a JSON file
   */
  public getMetadata(path: string): Observable<{
    label?: string;
    tags: string[];
    duration?: number;
  }> {
    if (!window.library) {
      // We are outside of Electron
      return NEVER;
    }

    return from(window.audio.getMetadata(path));
  }
}
