import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith } from 'rxjs';
import { PlaylistService } from '../../../shared/index';
import { PlaylistItemComponent } from '../playlist-item/playlist-item.component';

@Component({
  selector: 'unprepared-music-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PlaylistItemComponent, AsyncPipe],
})
export class PlaylistComponent {
  /**
   * @internal
   */
  public list$ = this.playlist.change.pipe(startWith(this.playlist.list()));

  constructor(private playlist: PlaylistService) {}

  public onRemove(index: number) {
    this.playlist.removeIndex(index);
  }
}
