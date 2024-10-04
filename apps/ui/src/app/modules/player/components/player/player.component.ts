import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import {
  faPause,
  faPlay,
  faRotate,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { map, startWith } from 'rxjs';
import { PlaylistService } from '../../../shared';

@Component({
  selector: 'unprepared-music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  /**
   * @internal
   */
  public faPlay = faPlay;
  /**
   * @internal
   */
  public faPause = faPause;
  /**
   * @internal
   */
  public faRotate = faRotate;
  /**
   * @internal
   */
  public faTrash = faTrash;

  @Output()
  public currentItem$ = this.playlist.change.pipe(
    startWith(this.playlist.list()),
    map((list) => list[0])
  );

  public isPlaylistEmpty$ = this.currentItem$.pipe(map((item) => !item));

  constructor(private playlist: PlaylistService) {}
}
