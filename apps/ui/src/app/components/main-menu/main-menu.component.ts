import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  faBoxesPacking,
  faHeadphones,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'unprepared-music-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {
  /**
   * @internal
   */
  public faHeadphones = faHeadphones;
  /**
   * @internal
   */
  public faMusic = faMusic;
  /**
   * @internal
   */
  public faBoxesPacking = faBoxesPacking;
}
