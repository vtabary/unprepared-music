import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'unprepared-music-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}
