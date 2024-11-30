import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { faPlay, faRotate, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ISound } from '@local/shared-interfaces';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'unprepared-music-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistItemComponent {
  @Input({ required: true })
  public item!: ISound;

  /**
   * @internal
   */
  public faPlay = faPlay;
  /**
   * @internal
   */
  public faRotate = faRotate;
  /**
   * @internal
   */
  public faTrash = faTrash;

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