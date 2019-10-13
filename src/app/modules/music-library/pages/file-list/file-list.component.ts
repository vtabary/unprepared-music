import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { MusicLibraryService, IMusicLibrary } from 'src/app/modules/shared/services/music-library/music-library.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent {
  public list$: Observable<IMusicLibrary>;

  constructor(
    private musicLibrary: MusicLibraryService
  ) {
    this.list$ = musicLibrary.open();
  }

  public onSync() {
    this.list$.pipe(
        switchMap(library => this.musicLibrary.sync(library)),
        tap(files => console.log(files)),
        switchMap(library => this.musicLibrary.save(library))
      )
      .subscribe();
  }
}
