import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutColumnComponent } from '@local/ui-components';
import { DevicesComponent } from '../../components/devices/devices.component';

@Component({
  selector: 'unprepared-music-devices-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DevicesComponent, LayoutColumnComponent],
})
export class ListComponent {}
