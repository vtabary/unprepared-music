import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith } from 'rxjs';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from '../../../shared';

@Component({
  selector: 'unprepared-music-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent {
  /**
   * @internal
   */
  public list$ = this.playlist.change.pipe(startWith(this.playlist.list()));
  /**
   * @internal
   */
  public faTrash = faTrash;

  constructor(private playlist: PlaylistService) {}

  public onRemove(index: number) {
    this.playlist.removeIndex(index);
  }
}
