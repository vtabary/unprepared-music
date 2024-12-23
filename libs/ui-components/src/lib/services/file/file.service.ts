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
   * Display a dialog to select a file
   */
  public open(
    accept: { name: string; extensions: string[] }[]
  ): Observable<string[]> {
    if (!window.file) {
      // We are outside of Electron
      return of([]);
    }

    return from(window.file.open(accept));
  }

  /**
   * Display a dialog to select a directory
   */
  public openDirectory(): Observable<string[]> {
    if (!window.file) {
      // We are outside of Electron
      return of([]);
    }

    return from(window.file.openDirectory());
  }
}
