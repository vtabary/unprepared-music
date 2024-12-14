import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uc-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChipsComponent {}
