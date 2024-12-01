import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DevicesComponent } from '../../components/devices/devices.component';

@Component({
  selector: 'unprepared-music-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DevicesComponent],
})
export class ListComponent {}
