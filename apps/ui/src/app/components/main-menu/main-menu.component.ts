import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
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
  standalone: true,
  imports: [RouterLink, FaIconComponent],
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
