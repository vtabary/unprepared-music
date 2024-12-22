import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISound } from '@local/shared-interfaces';
import { IconComponent } from '@local/ui-components';
import { SoundControlsComponent } from '../sound-controls/sound-controls.component';

@Component({
  selector: 'unprepared-music-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SoundControlsComponent, IconComponent],
})
export class SoundCardComponent {
  @Input()
  public item?: ISound;
}
