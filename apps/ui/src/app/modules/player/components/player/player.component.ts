import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { IconComponent } from '@local/ui-components';
import { map, startWith } from 'rxjs';
import { PlaylistService } from '../../../shared/index';

@Component({
  selector: 'unprepared-music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, AsyncPipe],
})
export class PlayerComponent {
  @Output()
  public currentItem$ = this.playlist.change.pipe(
    startWith(this.playlist.list()),
    map((list) => list[0])
  );

  public isPlaylistEmpty$ = this.currentItem$.pipe(map((item) => !item));

  constructor(private playlist: PlaylistService) {}
}
