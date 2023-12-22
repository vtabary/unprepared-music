import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISound } from '../../../shared';

@Component({
  selector: 'unprepared-music-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoundCardComponent {
  @Input()
  public item?: ISound;
}
