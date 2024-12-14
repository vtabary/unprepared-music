import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'uc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class ButtonComponent {
  @Input()
  public type = 'button';

  @Input()
  public title = '';

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

  private _clickButton = new Subject<void>();

  @Output()
  public get clickButton(): Observable<void> {
    return this._clickButton.asObservable();
  }

  /**
   * @internal
   */
  public onClickButton(): void {
    this._clickButton.next(undefined);
  }
}
