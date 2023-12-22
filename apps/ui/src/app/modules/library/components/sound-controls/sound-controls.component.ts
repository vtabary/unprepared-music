import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { faPause, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlayerConfigurationService } from '../../../configuration/services/player-configuration/player-configuration.service';
import {
  AudioComponent,
  AudioStatus,
} from '../../../shared/components/audio/audio.component';
import { PlaylistService } from '../../../shared';

@Component({
  selector: 'unprepared-music-sound-controls',
  templateUrl: './sound-controls.component.html',
  styleUrls: ['./sound-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoundControlsComponent implements OnInit {
  @Input()
  public url?: string;

  @ViewChild(AudioComponent, { read: AudioComponent })
  public audioObject?: AudioComponent;

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
  public audioStatus?: AudioStatus;

  constructor(
    private playerConfiguration: PlayerConfigurationService,
    private playlist: PlaylistService
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
    if (!this.audioObject) {
      return;
    }

    this.audioObject.play();
  }

  /**
   * @internal
   */
  public onPause(): void {
    if (!this.audioObject) {
      return;
    }

    this.audioObject.pause();
  }
}
