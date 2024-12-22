import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IconComponent } from '@local/ui-components';
import { map } from 'rxjs';
import { PlayerConfigurationService } from '../../../configuration/index';
import { AudioManagerService, AudioStatus } from '../../../shared-player/index';
import { PlaylistService } from '../../../shared/index';

@Component({
  selector: 'unprepared-music-sound-controls',
  templateUrl: './sound-controls.component.html',
  styleUrls: ['./sound-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AudioManagerService],
  imports: [IconComponent, AsyncPipe],
})
export class SoundControlsComponent implements OnInit {
  @Input()
  public url?: string;

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
