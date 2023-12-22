import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayerConfigurationService } from '../../../configuration/services/player-configuration/player-configuration.service';

@Component({
  selector: 'unprepared-music-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesComponent implements OnInit {
  /**
   * @internal
   */
  public devices$ = new Subject<MediaDeviceInfo[]>();
  /**
   * @internal
   */
  public mainId = 'default';
  /**
   * @internal
   */
  public testId = 'default';

  constructor(private playerConfiguration: PlayerConfigurationService) {}

  /**
   * @internal
   */
  public ngOnInit(): void {
    void this.getDevices();
    this.mainId = this.playerConfiguration.getMainSinkId();
    this.testId = this.playerConfiguration.getTestSinkId();
  }

  /**
   * @internal
   */
  public onSelectMainDevice(sinkId: string): void {
    this.playerConfiguration.setMainSinkId(sinkId);
    this.mainId = this.playerConfiguration.getMainSinkId();
  }

  /**
   * @internal
   */
  public onSelectTestDevice(sinkId: string): void {
    this.playerConfiguration.setTestSinkId(sinkId);
    this.testId = this.playerConfiguration.getTestSinkId();
  }

  /**
   * @internal
   */
  public async onRefresh(): Promise<void> {
    return this.getDevices();
  }

  private async getDevices(): Promise<void> {
    if (!navigator.mediaDevices?.enumerateDevices) {
      throw new Error('enumerateDevices not supported');
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

      const devices = await navigator.mediaDevices.enumerateDevices();
      this.devices$.next(
        devices.filter((device) => device.kind === 'audiooutput')
      );
    } catch (e) {
      this.devices$.next([]);
    }
  }
}
