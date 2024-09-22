import { Injectable } from '@angular/core';
import { IAudioFunctions } from '@local/shared-interfaces';
import { from, Observable } from 'rxjs';

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
    return from(window.audio.getMetadata(path));
  }
}
