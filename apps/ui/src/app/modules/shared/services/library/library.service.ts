import { EventEmitter, Injectable } from '@angular/core';
import { ILibraryFunctions, ISound } from '@local/shared-interfaces';
import {
  BehaviorSubject,
  from,
  map,
  NEVER,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';

declare global {
  interface Window {
    library: ILibraryFunctions;
  }
}

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  /**
   * Will be triggered an event every time an item is added ou removed
   */
  public change = new EventEmitter<ISound[]>();
  /**
   * Will be triggered when a library is loaded
   */
  public loaded = new BehaviorSubject<boolean>(false);

  private registry: Record<string, ISound> = {};
  private _loaded = false;
  private currentLibraryPath?: string;

  public getCurrentLibraryPath(): string | undefined {
    return this.currentLibraryPath;
  }

  public isLoaded(): boolean {
    return this._loaded;
  }

  /**
   * Load items from a JSON file
   */
  public load(filePath: string): Observable<ISound[]> {
    if (!window.library) {
      // We are outside of Electron
      return of([]);
    }

    return from(window.library.list(filePath)).pipe(
      tap((items) => {
        this.registry = Object.fromEntries(
          items.map((item) => [item.path, item])
        );
        this.currentLibraryPath = filePath;
        this._loaded = true;
        this.loaded.next(true);
        this.change.emit(items);
      })
    );
  }

  /**
   * Returns the items actually loaded
   */
  public list(): ISound[] {
    return Object.values(this.registry);
  }

  public create(
    directoryPath: string,
    projectName: string
  ): Observable<string> {
    if (!window.library) {
      // We are outside of Electron
      return NEVER;
    }

    return from(window.library.create(directoryPath, projectName));
  }

  /**
   * Returns the items actually loaded
   */
  public add(
    item: Pick<ISound, 'path' | 'type' | 'duration'> &
      Partial<Pick<ISound, 'label' | 'tags'>>,
    filePath = this.currentLibraryPath
  ): Observable<ISound> {
    if (!window.library || !filePath) {
      // We are outside of Electron
      return NEVER;
    }

    return from(window.library.add(item, filePath)).pipe(
      switchMap((result) => this.load(filePath).pipe(map(() => result)))
    );
  }

  /**
   * Returns the items actually loaded
   */
  public remove(
    item: ISound,
    filePath = this.currentLibraryPath
  ): Observable<void> {
    if (!window.library || !filePath) {
      // We are outside of Electron
      return NEVER;
    }

    return from(window.library.remove(item.path, filePath)).pipe(
      switchMap((result) => this.load(filePath).pipe(map(() => result)))
    );
  }

  /**
   * Try to find an item based on the provided path
   */
  public find(itemPath: string): ISound | undefined {
    return this.registry[itemPath];
  }
}
