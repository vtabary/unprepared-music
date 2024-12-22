import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    '[class.uc-icon]': 'true',
  },
})
export class IconComponent {
  @Input()
  public title = '';

  @Input()
  public name?: string;
}
