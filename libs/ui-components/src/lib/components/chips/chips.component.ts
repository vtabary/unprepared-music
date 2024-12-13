import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'unprepared-components-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChipsComponent {}
