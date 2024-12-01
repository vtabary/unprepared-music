import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faPause,
  faPlay,
  faRotate,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { map, startWith } from 'rxjs';
import { ButtonComponent, PlaylistService } from '../../../shared/index';

@Component({
  selector: 'unprepared-music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonComponent, FaIconComponent, AsyncPipe],
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
