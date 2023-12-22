import { EventEmitter, Injectable } from '@angular/core';
import { ISound } from '../../models/sound';
import { LibraryService } from '../library/library.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  public change = new EventEmitter<ISound[]>();

  private registry: ISound[] = [];

  constructor(private library: LibraryService) {}

  public list(): ISound[] {
    return [...this.registry];
  }

  public addItem(path: string): void {
    const item = this.library.find(path);
    if (!item) {
      return;
    }
    this.registry.push(item);

    this.change.emit(this.list());
  }

  public removeItem(path: string): void {
    this.registry = this.registry.filter((item) => item.path !== path);

    this.change.emit(this.list());
  }

  public removeIndex(index: number): void {
    this.registry = [
      ...this.registry.slice(0, index),
      ...this.registry.slice(index + 1),
    ];

    this.change.emit(this.list());
  }
}
