import { Injectable } from '@angular/core';
import { IFileFunctions } from '@local/shared-interfaces';
import { from, Observable } from 'rxjs';

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
    return from(window.file.open(accept));
  }
}
