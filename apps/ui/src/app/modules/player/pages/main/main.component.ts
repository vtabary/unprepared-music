import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutColumnComponent } from '@local/ui-components';
import { PlayerComponent } from '../../components/player/player.component';
import { PlaylistComponent } from '../../components/playlist/playlist.component';

@Component({
  selector: 'unprepared-music-player-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PlayerComponent, PlaylistComponent, LayoutColumnComponent],
})
export class MainComponent {}
