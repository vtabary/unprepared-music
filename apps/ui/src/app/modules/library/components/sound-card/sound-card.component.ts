import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISound } from '@local/shared-interfaces';
import { ChipsComponent } from '../../../shared/index';
import { SoundControlsComponent } from '../sound-controls/sound-controls.component';

@Component({
  selector: 'unprepared-music-sound-card',
  templateUrl: './sound-card.component.html',
  styleUrls: ['./sound-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, ChipsComponent, SoundControlsComponent],
})
export class SoundCardComponent {
  @Input()
  public item?: ISound;
}
