import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { ISound } from '@local/shared-interfaces';
import {
  ButtonComponent,
  DurationPipe,
  IconComponent,
} from '@local/ui-components';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'unprepared-music-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, DurationPipe, IconComponent],
})
export class PlaylistItemComponent {
  @Input({ required: true })
  public item!: ISound;

  private _remove = new Subject<void>();

  @Output()
  public get remove(): Observable<void> {
    return this._remove.asObservable();
  }

  /**
   * @internal
   */
  public onRemove(): void {
    this._remove.next();
  }
}
