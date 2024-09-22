import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faPause, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlayerConfigurationService } from '../../../configuration/services/player-configuration/player-configuration.service';
import { PlaylistService } from '../../../shared';
import { AudioManagerService, AudioStatus } from '../../../shared-player';
import { map } from 'rxjs';

@Component({
  selector: 'unprepared-music-sound-controls',
  templateUrl: './sound-controls.component.html',
  styleUrls: ['./sound-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AudioManagerService],
})
export class SoundControlsComponent implements OnInit {
  @Input()
  public url?: string;

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
  public faPlus = faPlus;
  /**
   * @internal
   */
  public testSinkId = 'default';
  /**
   * @internal
   */
  public isPlaying$ = this.audioManager.state.pipe(
    map((state) => state === AudioStatus.PLAYING)
  );

  constructor(
    private playerConfiguration: PlayerConfigurationService,
    private playlist: PlaylistService,
    private audioManager: AudioManagerService
  ) {}

  /**
   * @internal
   */
  public ngOnInit(): void {
    this.testSinkId = this.playerConfiguration.getTestSinkId();
  }

  /**
   * @internal
   */
  public onAddPlaylist(): void {
    if (!this.url) {
      return;
    }

    this.playlist.addItem(this.url);
  }

  /**
   * @internal
   */
  public onPlayTest(): void {
    // if (!this.audioObject) {
    //   return;
    // }

    // this.audioObject.play();

    if (!this.url) {
      return;
    }
    this.audioManager.play(this.url);
  }

  /**
   * @internal
   */
  public onPause(): void {
    this.audioManager.pause();
  }
}
