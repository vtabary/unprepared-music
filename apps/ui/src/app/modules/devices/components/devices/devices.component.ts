import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToastService } from '@local/ui-components';
import { catchError, from, of, Subject } from 'rxjs';
import { PlayerConfigurationService } from '../../../configuration/index';

@Component({
  selector: 'unprepared-music-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, NgClass],
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
  /**
   * @internal
   */
  public errorMessage?: string;

  constructor(
    private readonly playerConfiguration: PlayerConfigurationService,
    private readonly toast: ToastService
  ) {}

  /**
   * @internal
   */
  public ngOnInit(): void {
    this.onRefresh();
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
  public onRefresh(): void {
    this.errorMessage = undefined;

    from(this.getDevices())
      .pipe(
        catchError((e) => {
          this.toast.show({
            message: e.message,
            title: 'Error',
          });
          return of([]);
        })
      )
      .subscribe({
        next: (devices) => this.devices$.next(devices),
      });
  }

  private async getDevices(): Promise<MediaDeviceInfo[]> {
    if (!navigator.mediaDevices?.enumerateDevices) {
      throw new Error('enumerateDevices not supported');
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

      const devices = await navigator.mediaDevices.enumerateDevices();
      return devices.filter((device) => device.kind === 'audiooutput');
    } catch (e) {
      if (
        e instanceof DOMException &&
        e.name === 'NotAllowedError' &&
        e.message === 'Permission denied by system'
      ) {
        throw new Error(
          'Permission denied by the system. Please allow the microphone access from your system settings (ex: Windows > Settings > Privacy).'
        );
      }

      throw new Error(`No device is returned by the application. Either you have no
  peripherals, you didn't accept the permission to access to the microphone. This one is required to list the peripherals.`);
    }
  }
}
