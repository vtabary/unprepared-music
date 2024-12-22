import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconComponent, LayoutColumnComponent } from '@local/ui-components';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'unprepared-music-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    LayoutColumnComponent,
    MainMenuComponent,
    RouterOutlet,
    IconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /**
   * @internal
   */
  public reducedMenu = false;

  /**
   * @internal
   */
  public onToggleMenu() {
    this.reducedMenu = !this.reducedMenu;
  }
}
