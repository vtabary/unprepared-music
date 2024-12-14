import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent {
  @Input()
  public title = '';

  @Input()
  public name?: string;
}
