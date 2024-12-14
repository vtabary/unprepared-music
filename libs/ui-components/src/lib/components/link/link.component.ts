import { JsonPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'uc-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, NgClass, JsonPipe],
})
export class LinkComponent {
  @Input()
  public title = '';

  @Input()
  public url = '';

  @Input()
  public level: 'primary' | 'secondary' | 'default' | 'text' = 'default';

  @Input()
  public groupOn: 'default' | 'left' | 'right' | 'both' = 'default';

  @Input()
  public size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  public display: 'button' | 'text' = 'button';

  @Input()
  public disabled = false;

  private _clickLink = new Subject<void>();

  @Output()
  public get clickLink(): Observable<void> {
    return this._clickLink.asObservable();
  }

  /**
   * @internal
   */
  public onClickLink(): void {
    this._clickLink.next(undefined);
  }
}
