import { Component } from '@angular/core';
import { faHeadphones, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'unprepared-music-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
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
}
