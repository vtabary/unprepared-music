import { EventEmitter, Injectable } from '@angular/core';
import { ILibraryFunctions, ISound } from '@local/shared-interfaces';
import { from, mapTo, Observable, switchMap, tap } from 'rxjs';

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
   * Will trigger an event every time an item is added ou removed
   */
  public change = new EventEmitter<ISound[]>();

  private registry: Record<string, ISound> = {};
  private loaded = false;

  public isLoaded(): boolean {
    return this.loaded;
  }

  /**
   * Load items from a JSON file
   */
  public load(): Observable<ISound[]> {
    return from(window.library.list()).pipe(
      tap((items) => {
        this.registry = Object.fromEntries(
          items.map((item) => [item.path, item])
        );
        this.loaded = true;
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

  /**
   * Returns the items actually loaded
   */
  public add(
    item: Pick<ISound, 'path' | 'type'> &
      Partial<Pick<ISound, 'label' | 'tags'>>
  ): Observable<ISound> {
    return from(window.library.add(item)).pipe(
      switchMap((result) => this.load().pipe(mapTo(result)))
    );
  }

  /**
   * Returns the items actually loaded
   */
  public remove(item: ISound): Observable<void> {
    return from(window.library.remove(item.path)).pipe(
      switchMap((result) => this.load().pipe(mapTo(result)))
    );
  }

  /**
   * Try to find an item based on the provided path
   */
  public find(itemPath: string): ISound | undefined {
    return this.registry[itemPath];
  }
}
