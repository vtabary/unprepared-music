import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uc-layout-column',
  templateUrl: './layout-column.component.html',
  styleUrls: ['./layout-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LayoutColumnComponent {
  @Input()
  public grow = 0;
}
