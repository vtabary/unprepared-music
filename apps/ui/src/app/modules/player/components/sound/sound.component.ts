import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { PlayerConfigurationService } from '../../../configuration/services/player-configuration/player-configuration.service';

export interface ExperimentalHTMLAudioElement extends HTMLAudioElement {
  setSinkId?: (id: string) => void;
}

@Component({
  selector: 'unprepared-music-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss'],
})
export class SoundComponent {
  @Input()
  public url?: string;

  @ViewChild('audioObject')
  public audioObject?: ElementRef<ExperimentalHTMLAudioElement>;

  /**
   * @internal
   */
  public faPlay = faPlay;

  constructor(private playerConfiguration: PlayerConfigurationService) {}

  /**
   * @internal
   */
  public onPlayMain(): void {
    if (!this.audioObject) {
      return;
    }

    if (this.audioObject.nativeElement.setSinkId) {
      this.audioObject.nativeElement.setSinkId(
        this.playerConfiguration.getMainSinkId()
      );
    }

    this.audioObject.nativeElement.play();
  }

  /**
   * @internal
   */
  public onPlayTest(): void {
    if (!this.audioObject) {
      return;
    }

    if (this.audioObject.nativeElement.setSinkId) {
      this.audioObject.nativeElement.setSinkId(
        this.playerConfiguration.getTestSinkId()
      );
    }

    this.audioObject.nativeElement.play();
  }

  /**
   * @internal
   */
  public onPause(): void {
    if (!this.audioObject) {
      return;
    }

    this.audioObject.nativeElement.pause();
  }
}
