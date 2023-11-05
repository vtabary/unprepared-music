import { Component, Input } from '@angular/core';

@Component({
  selector: 'unprepared-music-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public type = 'button';

  @Input()
  public level: 'primary' | 'secondary' | 'default' = 'default';

  @Input()
  public groupOn: 'default' | 'left' | 'right' | 'both' = 'default';

  @Input()
  public size: 'small' | 'medium' | 'large' = 'medium';
}
