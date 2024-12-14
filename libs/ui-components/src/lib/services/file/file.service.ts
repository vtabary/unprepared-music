import { Injectable } from '@angular/core';
import { IFileFunctions } from '@local/shared-interfaces';
import { from, Observable, of } from 'rxjs';

declare global {
  interface Window {
    file: IFileFunctions;
  }
}

@Injectable({
  providedIn: 'root',
})
export class FileService {
  /**
   * Load items from a JSON file
   */
  public open(accept: string): Observable<string[]> {
    if (!window.file) {
      // We are outside of Electron
      return of([]);
    }

    return from(window.file.open(accept));
  }
}
