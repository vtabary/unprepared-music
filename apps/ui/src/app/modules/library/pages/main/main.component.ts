import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutColumnComponent } from '@local/ui-components';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'unprepared-music-library-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListComponent, LayoutColumnComponent],
})
export class MainComponent {}
