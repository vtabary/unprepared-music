import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'unprepared-music-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ListComponent],
})
export class MainComponent {}
