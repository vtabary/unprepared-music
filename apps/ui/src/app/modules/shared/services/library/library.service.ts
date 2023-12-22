import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ISound } from '../../models/sound';

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

  constructor(private http: HttpClient) {}

  public isLoaded(): boolean {
    return this.loaded;
  }

  /**
   * Load items from a JSON file
   */
  public load(): Observable<ISound[]> {
    return this.http.get<ISound[]>('./assets/sounds/list.json').pipe(
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
   * Try to find an item based on the provided path
   */
  public find(itemPath: string): ISound | undefined {
    return this.registry[itemPath];
  }
}
