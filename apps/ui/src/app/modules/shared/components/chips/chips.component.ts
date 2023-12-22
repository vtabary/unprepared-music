import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'unprepared-music-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {}
