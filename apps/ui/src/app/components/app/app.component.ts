import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutColumnComponent } from '@local/ui-components';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'unprepared-music-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LayoutColumnComponent, MainMenuComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ui';
}
