import { Observable, forkJoin, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FileHelperService } from '../file-helper/file-helper.service';

export interface IMusicLibraryItem {
  path: string;
  tags: string[];
}

export interface IMusicLibraryFolder {
  path: string;
  items: IMusicLibraryItem[];
}

export type IMusicLibrary = IMusicLibraryFolder[];

@Injectable({
  providedIn: 'root'
})
export class MusicLibraryService {
  private defaultFilePath = './music-library.json';
  private path: any;

  constructor(
    public fileHelper: FileHelperService
  ) {
    if (!(window as any).require) {
      return;
    }

    this.path = (window as any).require('path');
  }

  public open(): Observable<IMusicLibrary> {
    return this.fileHelper.open(this.defaultFilePath)
      .pipe(map(data => data ? data : []));
  }

  public save(library: IMusicLibrary): Observable<void> {
    return this.fileHelper.save(this.defaultFilePath, JSON.stringify(library));
  }

  public sync(library: IMusicLibrary): Observable<IMusicLibrary> {
    if (library.length === 0) {
      return EMPTY;
    }

    return forkJoin(
      library.map(folder => this.syncFolder(folder))
    );
  }

  public list(folderPath: string): Observable<IMusicLibraryFolder> {
    return this.fileHelper.list(folderPath)
      .pipe(map(files => {
        return {
          path: folderPath,
          items: files.map(file => ({ path: this.path.relative(folderPath, file), tags: [] })),
        };
      }));
  }

  private syncFolder(folder: IMusicLibraryFolder): Observable<IMusicLibraryFolder> {
    return this.list(folder.path);
  }
}
