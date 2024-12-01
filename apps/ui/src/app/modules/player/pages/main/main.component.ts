import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlayerComponent } from '../../components/player/player.component';
import { PlaylistComponent } from '../../components/playlist/playlist.component';

@Component({
  selector: 'unprepared-music-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PlayerComponent, PlaylistComponent],
})
export class MainComponent {}
